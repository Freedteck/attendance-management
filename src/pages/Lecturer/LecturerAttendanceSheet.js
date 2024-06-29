import { useEffect, useState } from "react";
import AttendanceSheet from "../../components/AttendanceSheet";
import useFetch from "../../hooks/useFetch";
const BASE = "http://localhost:8080/api/v1";

const LecturerAttendanceSheet = () => {
  const [sheetDisplayed, setSheetDisplayed] = useState(false);
  const [students, setStudents] = useState([]);
  const [courses, setCourses] = useState([]);
  const [subjectCode, setSubjectCode] = useState("MAT101");
  const [date, setDate] = useState("2023-12-06");
  const { token } = useFetch();

  useEffect(() => {
    const getCourses = async () => {
      await fetch(`${BASE}/attendance/mySubjects`, {
        mode: "cors",
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((response) => response.json())
        .then((data) => {
          setCourses(data.data);
        })
        .catch((error) => {
          console.error("Failed to fetch courses:", error);
        });
    };

    getCourses();
  }, [token]);

  useEffect(() => {
    const getSheet = async () => {
      await fetch(
        `${BASE}/attendance/record?subjectCode=${subjectCode}&sort_id=0&date=${date}`,
        {
          mode: "cors",
          headers: { Authorization: `Bearer ${token}` },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          setStudents(data.META_DATA);
        })
        .catch((error) => {
          console.error("Failed to fetch lecturers:", error);
        });
    };

    getSheet();
  }, [token, subjectCode, date]);

  const handleClick = () => {
    setSheetDisplayed(true);
  };
  return (
    <main className="attendance">
      <h2>Attendance</h2>
      <section className="selections">
        <label>
          Subject
          <select
            name="subject"
            value={subjectCode}
            onChange={(e) => setSubjectCode(e.target.value)}
          >
            {courses.map((course, index) => (
              <option value={course.subjectId} key={`${course}${index}`}>
                {course.subjectId}
              </option>
            ))}
          </select>
        </label>
        <label>
          Date
          <input
            type="date"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>
        <button onClick={handleClick}>Generate Sheet</button>
      </section>
      {sheetDisplayed && <AttendanceSheet students={students} />}
      <button>Print Attendance</button>
    </main>
  );
};

export default LecturerAttendanceSheet;
