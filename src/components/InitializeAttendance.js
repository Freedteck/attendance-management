import { useEffect, useRef, useState } from "react";
import useFetch from "../hooks/useFetch";

const BASE = "http://localhost:8080/api/v1";

const InitializeAttendance = ({ isOpen, handleClose }) => {
  const [duration, setDuration] = useState(0);
  const [subjectCode, setSubjectCode] = useState("");
  const [courses, setCourses] = useState([]);
  const { token } = useFetch();
  const dialogRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }
  }, [isOpen]);

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

  const handleClick = async () => {
    await fetch(`${BASE}/attendance/initialize`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        subjectCode,
        duration,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        handleClose();
        localStorage.setItem("code", data.message);
      })
      .catch((error) => {
        console.log("Failed to initialize attendance", error);
      });
  };

  return (
    <dialog ref={dialogRef}>
      <form>
        <fieldset>
          <legend>Initialize attendance</legend>
          <label>
            Course code
            <select
              name="course"
              id="course"
              required
              value={subjectCode}
              onChange={(e) => setSubjectCode(e.target.value)}
            >
              <option value="" disabled>
                Select course
              </option>
              {courses.map((course, index) => (
                <option value={course.subjectId} key={`${course}${index}`}>
                  {course.subjectId}
                </option>
              ))}
            </select>
          </label>
          <label>
            Duration
            {/* <input
              type="time"
              name="valid-until"
              required
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            /> */}
            <input
              type="number"
              name="duration"
              value={duration}
              min={10}
              placeholder="Enter duration in minutes"
              onChange={(e) => setDuration(e.target.value)}
            />
          </label>
          <div className="btns">
            <button type="button" onClick={handleClick}>
              Add Notification
            </button>
            <button type="button" onClick={handleClose}>
              Cancel
            </button>
          </div>
        </fieldset>
      </form>
    </dialog>
  );
};

export default InitializeAttendance;
