import { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/firebase";

export default function LiveClass() {
  const [videoId, setVideoId] = useState("");

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "settings", "live"), (snapshot) => {
      if (snapshot.exists()) {
        setVideoId(snapshot.data().liveVideoId);
      }
    });

    return () => unsub();
  }, []);

  return (
    <div>
      <h1>🔴 Live Class</h1>

      {videoId ? (
        <iframe
          width="100%"
          height="600"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="Live Class"
          allowFullScreen
        />
      ) : (
        <p>No Live Class Available</p>
      )}
    </div>
  );
}
