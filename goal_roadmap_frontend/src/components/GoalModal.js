import React from "react";
import "./GoalModal.css";

// PUBLIC_INTERFACE
function GoalModal({ open, milestone, onClose }) {
  /**
   * Modal Dialog for Milestone Details
   * Displays overlay modal with detailed milestone information (title, description, target date, status).
   */
  if (!open || !milestone) return null;

  // Capitalize status text
  const getStatusLabel = (status) => {
    if (!status) return "";
    return (
      status.charAt(0).toUpperCase() +
      status.slice(1).replace("_", " ")
    );
  };

  const statusColors = {
    completed: "#00b894",
    in_progress: "#1e90ff",
    planned: "#ff9f43"
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={e => e.stopPropagation()} tabIndex={-1}>
        <button className="modal-close-btn" aria-label="Close" onClick={onClose}>
          &times;
        </button>
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          marginBottom: 8
        }}>
          <span
            style={{
              fontSize: "2rem",
              marginRight: 6,
              userSelect: "none"
            }}
            role="img"
            aria-label="milestone icon"
          >
            {milestone.icon}
          </span>
          <h2 style={{
            fontSize: "1.32rem",
            color: "var(--primary, #1e90ff)",
            fontWeight: 700,
            margin: 0
          }}>
            {milestone.title}
          </h2>
        </div>
        <div className="modal-content" style={{ marginBottom: 11, marginTop: 8 }}>
          <p style={{
            fontSize: "1.04rem",
            margin: "5px 0 14px 0",
            color: "#444"
          }}>{milestone.description}</p>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 7 }}>
            <span style={{
              color: "var(--accent, #00b894)",
              fontWeight: 600,
              fontSize: "1.01em"
            }}>
              Target date:
            </span>
            <span style={{
              color: "#222",
              fontWeight: 500
            }}>
              {milestone.date}
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{
              color: "#777",
              fontWeight: 600
            }}>
              Status:
            </span>
            <span style={{
              background: statusColors[milestone.status],
              color: "#fff",
              borderRadius: "7px",
              padding: "3px 13px",
              fontWeight: 600,
              fontSize: "0.97em",
              boxShadow: "0 2px 7px 0 rgba(30,144,255,0.10)"
            }}>
              {getStatusLabel(milestone.status)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GoalModal;
