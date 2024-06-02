import { useState } from "react";
import AttendanceSheet from "../../components/AttendanceSheet";

const LecturerAttendanceSheet = () => {
  const [sheetDisplayed, setSheetDisplayed] = useState(false);

  const handleClick = () => {
    setSheetDisplayed(true);
  };
  return (
    <main className="attendance">
      <h2>Attendance</h2>
      <section className="selections">
        <label>
          Subject
          <select name="subject">
            <option value="CPE3546">CPE546</option>
            <option value="CPE3546">CPE546</option>
            <option value="CPE3546">CPE546</option>
          </select>
        </label>
        <label>
          Date
          <input type="date" name="date" />
        </label>
        <button onClick={ handleClick }>Generate Sheet</button>
      </section>
      {sheetDisplayed && <AttendanceSheet />}
      <button>Print Attendance</button>
    </main>
  );
};

export default LecturerAttendanceSheet;
