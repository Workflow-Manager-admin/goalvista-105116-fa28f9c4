import React, { useState } from "react";
import "./MyGoalRoadmap.css";
import GoalModal from "./GoalModal";

/**
 * PUBLIC_INTERFACE
 * MyGoalRoadmap - Visual path showing interactive milestones.
 * Each milestone is clickable; clicking opens a modal popup with milestone details (description, date, status).
 * Minimalist, accent-colored, and responsive design with soft shadows and rounded corners.
 */
// Demo milestones, each has icon, title, description, date, and status
const DEMO_MILESTONES = [
  {
    icon: "🎯",
    title: "Learn JavaScript",
    description: "Complete an interactive JavaScript course and build at least 3 small demo projects.",
    date: "2024-03-20",
    status: "completed"
  },
  {
    icon: "💻",
    title: "Build My First Project",
    description: "Develop a personal website using React and deploy it online.",
    date: "2024-04-20",
    status: "in_progress"
  },
  {
    icon: "🛠️",
    title: "Get Internship",
    description: "Apply to 5+ relevant internships and prepare a standout resume and portfolio.",
    date: "2024-06-10",
    status: "planned"
  }
];

function MyGoalRoadmap({
  milestones = DEMO_MILESTONES
}) {
  // Modal open/close, and which milestone (index) is selected
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedMilestoneIdx, setSelectedMilestoneIdx] = useState(null);

  // Calculate completion percent (completed + 0.5*in_progress)
  const completed = milestones.filter(m => m.status === "completed").length;
  const inProgressIdx = milestones.findIndex(m => m.status === "in_progress");
  const percent = milestones.length
    ? Math.round(((completed + (inProgressIdx >= 0 ? 0.5 : 0)) / milestones.length) * 100)
    : 0;

  // PUBLIC_INTERFACE
  const handleMilestoneClick = idx => {
    setSelectedMilestoneIdx(idx);
    setModalOpen(true);
  };

  // PUBLIC_INTERFACE
  const handleModalClose = () => {
    setModalOpen(false);
    setSelectedMilestoneIdx(null);
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
                </div>
              );
            })}
          </div>
        </div>
        <div className="my-goal-roadmap__percent-label">
          {percent}% Complete
        </div>
      </div>
      <GoalModal
        open={modalOpen}
        milestone={selectedMilestoneIdx !== null ? milestones[selectedMilestoneIdx] : null}
        onClose={handleModalClose}
      />
    </section>
  );
}

export default MyGoalRoadmap;
