// MainLayout.js
import React from "react";
import { Outlet } from "react-router-dom";
import LecturerSidebar from "../../components/LecturerSidebar";

const LecturerLayout = () => {
  return (
    <div className="dashboard">
      <LecturerSidebar />
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
};

export default LecturerLayout;
