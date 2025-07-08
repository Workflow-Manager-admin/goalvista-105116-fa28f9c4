import React, { useState } from "react";
import "./MyGoalRoadmap.css";

/**
 * PUBLIC_INTERFACE
 * MyGoalRoadmap - Visual path showing interactive milestones.
 * Each milestone displays an icon and title, and can be clicked for future expansion (now shows a tooltip).
 * Maintains minimalist, accent-colored, and responsive design with soft shadows and rounded corners.
 */
// Default sample milestones (icon + title) if not provided via props
const DEFAULT_MILESTONES = [
  { icon: "🎯", title: "Learn JavaScript", status: "completed" },
  { icon: "💻", title: "Build My First Project", status: "in_progress" },
  { icon: "🛠️", title: "Get Internship", status: "planned" }
];

function MyGoalRoadmap({
  milestones = DEFAULT_MILESTONES
}) {
  // Which milestone (by index) is "tooltip"-open (for now only one at a time)
  const [openIdx, setOpenIdx] = useState(null);

  // Calculate completion percent (completed + 0.5*in_progress)
  const completed = milestones.filter(m => m.status === "completed").length;
  const inProgressIdx = milestones.findIndex(m => m.status === "in_progress");
  const percent = milestones.length
    ? Math.round(((completed + (inProgressIdx >= 0 ? 0.5 : 0)) / milestones.length) * 100)
    : 0;

  // PUBLIC_INTERFACE
  const handleMilestoneClick = idx => {
    // Toggle tooltip/modal for milestone; in future, expandable
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="my-goal-roadmap__container">
      <h2 className="my-goal-roadmap__title">My Goal Roadmap</h2>
      <div className="my-goal-roadmap__track-wrap">
        <div className="my-goal-roadmap__track">
          <div
            className="my-goal-roadmap__progress-bar"
            style={{ width: `${percent}%` }}
            aria-valuenow={percent}
            aria-valuemin="0"
            aria-valuemax="100"
            role="progressbar"
          />
          <div className="my-goal-roadmap__steps">
            {milestones.map((milestone, idx) => {
              // State coloring: completed, in_progress, planned
              let status = milestone.status;
              if (!status) {
                if (idx < completed) status = "completed";
                else if (idx === inProgressIdx) status = "in_progress";
                else status = "planned";
              }
              return (
                <div
                  key={milestone.title}
                  className={`my-goal-roadmap__step ${status}`}
                >
                  <button
                    className="my-goal-roadmap__dot"
                    style={{ cursor: "pointer" }}
                    aria-label={milestone.title}
                    tabIndex={0}
                    onClick={() => handleMilestoneClick(idx)}
                  >
                    <span
                      style={{
                        fontSize: "1.16rem",
                        lineHeight: 1,
                        userSelect: "none",
                        pointerEvents: "none"
                      }}
                    >
                      {milestone.icon}
                    </span>
                  </button>
                  <span className="my-goal-roadmap__step-label">
                    {milestone.title}
                  </span>
                  {/* Minimal tooltip for interactable milestones */}
                  {openIdx === idx &&
                    <div
                      className="my-goal-roadmap__milestone-tooltip"
                      tabIndex={-1}
                      style={{
                        position: "absolute",
                        top: 36,
                        zIndex: 99,
                        left: "50%",
                        transform: "translateX(-50%)",
                        minWidth: 120,
                        background: "var(--bg-primary, #fff)",
                        color: "var(--text-primary, #282c34)",
                        boxShadow: "0 6px 22px 0 rgba(0,184,148,0.10)",
                        borderRadius: 10,
                        padding: "12px 17px",
                        fontSize: "1rem",
                        fontWeight: 500,
                        whiteSpace: "nowrap",
                        border: "1px solid var(--border-color, #e9ecef)"
                      }}
                      onClick={e => e.stopPropagation()}
                    >
                      <span role="img" aria-label="icon" style={{ fontSize: "1.15em" }}>
                        {milestone.icon}
                      </span>{" "}
                      {milestone.title}
                      <span
                        style={{
                          position: "absolute",
                          right: 7,
                          top: 4,
                          cursor: "pointer",
                          color: "var(--primary, #1e90ff)"
                        }}
                        onClick={() => setOpenIdx(null)}
                        tabIndex={0}
                        aria-label="close tooltip"
                      >×</span>
                    </div>
                  }
                </div>
              );
            })}
          </div>
        </div>
        <div className="my-goal-roadmap__percent-label">
          {percent}% Complete
        </div>
      </div>
    </section>
  );
}

export default MyGoalRoadmap;
