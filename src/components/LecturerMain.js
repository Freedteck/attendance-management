import { useEffect, useState } from "react";
import AttendanceCards from "./AttendanceCards";
import MyCalendar from "./Calendar";
import Initialize from "./Initialize";
import ReportSection from "./NotificationSection";
import useFetch from "../hooks/useFetch";

const LecturerMain = () => {
  const [showCode, setShowCode] = useState(false);
  const { userRoles } = useFetch();

  useEffect(() => {
    if (userRoles && userRoles.includes("ROLE_LECTURER")) {
      setShowCode(true);
    } else {
      console.log("User not a Lecturer");
    }
  }, [userRoles]);

  return (
    <main>
      <h2>Dashboard</h2>
      <div className="infos">
        <div className="left-info">
          <AttendanceCards />
          <ReportSection />
        </div>
        <div className="right-info">
          <MyCalendar />
          {showCode && <Initialize />}
        </div>
      </div>
    </main>
  );
};

export default LecturerMain;
