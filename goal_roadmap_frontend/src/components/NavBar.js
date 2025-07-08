import React from "react";
import "./NavBar.css";

// PUBLIC_INTERFACE
function NavBar() {
  /**
   * Top Navigation Bar
   * Renders the application's brand and placeholder navigation on the top of the dashboard.
   */
  return (
    <nav className="navbar">
      <div className="navbar__brand">GoalVista</div>
      <div className="navbar__actions">
        {/* Placeholder for future nav actions / user profile */}
        <button className="navbar__user-btn" aria-label="User">
          <span role="img" aria-label="user">👤</span>
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
