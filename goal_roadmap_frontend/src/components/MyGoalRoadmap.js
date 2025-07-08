import React from "react";
import "./MyGoalRoadmap.css";

/**
 * PUBLIC_INTERFACE
 * MyGoalRoadmap - Visually prominent progress path for user roadmap.
 * Modern, responsive bar using accent, primary, and secondary colors.
 * Goals and their completion visually shown.
 */
function MyGoalRoadmap({ goals = [
  { name: "Define Vision", status: "completed" },
  { name: "Break Down Steps", status: "completed" },
  { name: "Launch MVP", status: "in_progress" },
  { name: "Get Feedback", status: "planned" }
] }) {
  // Calculate completion percentage (simple example)
  const completed = goals.filter(g => g.status === "completed").length;
  const inProgress = goals.findIndex(g => g.status === "in_progress");
  const percent = goals.length
    ? Math.round(((completed + (inProgress >= 0 ? 0.5 : 0)) / goals.length) * 100)
    : 0;

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
            {goals.map((goal, idx) => (
              <div
                key={goal.name}
                className={`my-goal-roadmap__step ${goal.status}`}
              >
                <span className="my-goal-roadmap__dot" />
                <span className="my-goal-roadmap__step-label">{goal.name}</span>
              </div>
            ))}
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
