import { useState } from "react";
import "../pages/Notes.css";

export default function Notes() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const notesData = [
    {
      id: 1,
      title: "Algebra Fundamentals",
      category: "mathematics",
      description:
        "Master the basics of algebra including equations and variables.",
      icon: "📐",
      file: "algebra_fundamentals.pdf",
    },
    {
      id: 2,
      title: "Calculus I",
      category: "mathematics",
      description: "Learn differentiation, integration, and limits.",
      icon: "📊",
      file: "calculus_i.pdf",
    },
    {
      id: 3,
      title: "Physics Mechanics",
      category: "science",
      description: "Understand motion, forces, energy, and momentum.",
      icon: "⚡",
      file: "physics_mechanics.pdf",
    },
    {
      id: 4,
      title: "Chemistry Reactions",
      category: "science",
      description: "Deep dive into chemical reactions and molecular bonding.",
      icon: "🧪",
      file: "chemistry_reactions.pdf",
    },
    {
      id: 5,
      title: "Biology Basics",
      category: "science",
      description: "Study cells, genetics, evolution, and ecosystems.",
      icon: "🧬",
      file: "biology_basics.pdf",
    },
    {
      id: 6,
      title: "English Grammar",
      category: "english",
      description: "Complete guide to English grammar rules and usage.",
      icon: "📚",
      file: "english_grammar.pdf",
    },
    {
      id: 7,
      title: "Shakespeare Literature",
      category: "english",
      description: "Analysis of major works and themes in Shakespeare's plays.",
      icon: "📖",
      file: "shakespeare_literature.pdf",
    },
    {
      id: 8,
      title: "History Overview",
      category: "history",
      description: "Comprehensive overview of world history and major events.",
      icon: "🏛️",
      file: "history_overview.pdf",
    },
  ];

  const categories = [
    { id: "all", label: "All Subjects" },
    { id: "mathematics", label: "Mathematics" },
    { id: "science", label: "Science" },
    { id: "english", label: "English" },
    { id: "history", label: "History" },
  ];

  const filteredNotes =
    selectedCategory === "all"
      ? notesData
      : notesData.filter((note) => note.category === selectedCategory);

  return (
    <div className="notes">
      <div className="notes-hero">
        <h1>Study Notes</h1>
        <p>
          Comprehensive study materials from all our courses. Download and learn
          anytime!
        </p>
      </div>

      <div className="notes-container">
        <div className="notes-filter">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`filter-button ${
                selectedCategory === category.id ? "active" : ""
              }`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="notes-grid">
          {filteredNotes.map((note) => (
            <div key={note.id} className="note-card">
              <div className="note-icon">{note.icon}</div>
              <h3>{note.title}</h3>
              <p>{note.description}</p>
              <a
                href={`/notes/${note.file}`}
                download
                className="download-button"
              >
                📥 Download PDF
              </a>
            </div>
          ))}
        </div>

        {filteredNotes.length === 0 && (
          <div style={{ textAlign: "center", padding: "60px 20px" }}>
            <p style={{ fontSize: "1.1rem", color: "#6b7280" }}>
              No notes available for this category yet. Check back soon!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
