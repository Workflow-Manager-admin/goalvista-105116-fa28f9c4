import React from "react";
import "./RoadmapArea.css";
import MyGoalRoadmap from "./MyGoalRoadmap";

// PUBLIC_INTERFACE
function RoadmapArea({ onGoalClick }) {
  /**
   * Main content area for roadmap or goals visualization.
   * Includes a visually prominent "My Goal Roadmap" with progress bar/path.
   */
  return (
    <main className="roadmap-area">
      <MyGoalRoadmap />
      <h1>Roadmap Visualizer</h1>
      <p className="roadmap-area__desc">Your goals and milestones will appear here.</p>
      {/* Example goal cards (clickable to open modal) */}
      <div className="goal-cards">
        <div className="goal-card" onClick={() => onGoalClick("Launch MVP")}>
          <h3>Launch MVP</h3>
          <span className="goal-card__status in-progress">In Progress</span>
        </div>
        <div className="goal-card" onClick={() => onGoalClick("Learn React")}>
          <h3>Learn React</h3>
          <span className="goal-card__status planned">Planned</span>
        </div>
      </div>
    </main>
  );
}

export default RoadmapArea;
