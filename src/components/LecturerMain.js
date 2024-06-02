import AttendanceCards from "./AttendanceCards";
import MyCalendar from "./Calendar";
import ReportSection from "./NotificationSection";

const LecturerMain = () => {
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
        </div>
      </div>
    </main>
  );
};

export default LecturerMain;
