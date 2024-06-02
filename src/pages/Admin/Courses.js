import { useNavigate } from "react-router-dom";
import CourseList from "../../components/CourseList";

const Courses = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('./add')
  }
  return (
    <main>
      <div className="add">
        <h2>Courses</h2>
        <button onClick={handleClick}>Add Course</button>
      </div>
      <CourseList />
    </main>
  );
};

export default Courses;
