import React from "react";
import "./GoalModal.css";

// PUBLIC_INTERFACE
function GoalModal({ open, goal, onClose }) {
  /**
   * Modal Dialog for Goal Details (placeholder)
   * Displays overlay modal with basic goal information.
   */
  if (!open) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={e => e.stopPropagation()}>
        <button className="modal-close-btn" aria-label="Close" onClick={onClose}>
          &times;
        </button>
        <h2>{goal || "Goal Details"}</h2>
        <div className="modal-content">
          <p>This is a placeholder for goal details and actions.</p>
          <p>More info and editing capabilities will appear here.</p>
        </div>
      </div>
    </div>
  );
}

export default GoalModal;
