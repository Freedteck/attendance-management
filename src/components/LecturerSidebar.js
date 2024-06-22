// LecturerSidebar.js
import React from "react";
import { Link } from "react-router-dom";

const LecturerSidebar = () => {
  return (
    <aside>
      <div className="dash">
        <Link to="/lecturer/dashboard">Dashboard</Link>
      </div>
      <div className="sheet">
        <Link to="/lecturer/attendance-sheet">Attendance Sheet</Link>
      </div>
      <div className="student">
        <Link to="/lecturer/students">Students</Link>
      </div>
      <div className="logout">
        <Link to="">Logout</Link>
      </div>
    </aside>
  );
};

export default LecturerSidebar;
