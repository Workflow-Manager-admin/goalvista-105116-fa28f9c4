import React from "react";
import "./Sidebar.css";

// PUBLIC_INTERFACE
function Sidebar({ categories = ["All Goals", "Personal", "Work", "Fitness", "Learning"], selected, onSelect }) {
  /**
   * Left Sidebar
   * Shows categories for filtering/viewing goals.
   * Categories are passed in, with selection and interaction handler.
   */
  return (
    <aside className="sidebar">
      <h2 className="sidebar__title">Categories</h2>
      <nav className="sidebar__list">
        {categories.map((category, idx) => (
          <button
            key={category}
            className={`sidebar__item${selected === category ? " selected" : ""}`}
            onClick={() => onSelect && onSelect(category)}
          >
            {category}
          </button>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
