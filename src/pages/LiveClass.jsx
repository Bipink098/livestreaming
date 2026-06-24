import { useEffect, useState } from "react";
import { doc, onSnapshot, setDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import "../pages/LiveClass.css";

export default function LiveClass() {
  const [videoId, setVideoId] = useState("");
  const [formId, setFormId] = useState("");
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const liveDoc = doc(db, "settings", "live");

    const unsub = onSnapshot(liveDoc, (snapshot) => {
      if (snapshot.exists()) {
        const liveVideoId = snapshot.data()?.liveVideoId || "";
        setVideoId(liveVideoId);
        setFormId(liveVideoId);
      } else {
        setVideoId("");
        setFormId("");
      }
    });

    return () => unsub();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSaving(true);
    setStatus("");
    setError("");

    try {
      const liveDoc = doc(db, "settings", "live");
      await setDoc(liveDoc, { liveVideoId: formId }, { merge: true });
      setStatus("Live video ID saved successfully.");
    } catch (saveError) {
      console.error("Error saving live video ID:", saveError);
      setError("Unable to save the live video ID. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="live-class-page">
      <h1>🔴 Live Class</h1>

      {videoId ? (
        <div className="live-video-wrapper">
          <iframe
            width="100%"
            height="600"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="Live Class"
            allowFullScreen
          />

          <iframe
            width="30%"
            height="600"
            src={`https://www.youtube.com/live_chat?v=${videoId}&embed_domain=livestreaming-nine.vercel.app`}
            title="Live Chat"
          />
        </div>
      ) : (
        <p>No Live Class Available</p>
      )}

      <section className="live-video-form">
        <h2>Update Live Video ID</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="videoId">YouTube Video ID</label>
          <input
            id="videoId"
            type="text"
            value={formId}
            onChange={(event) => setFormId(event.target.value.trim())}
            placeholder="Enter YouTube video ID"
          />
          <button type="submit" disabled={saving || !formId}>
            {saving ? "Saving…" : "Save Video ID"}
          </button>
        </form>

        {status && <p className="status-message">{status}</p>}
        {error && <p className="error-message">{error}</p>}
      </section>
    </div>
  );
}
