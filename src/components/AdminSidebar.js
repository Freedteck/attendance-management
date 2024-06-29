import { Link } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <aside>
      <div className="dash">
        <Link to="/admin/dashboard">Dashboard</Link>
      </div>
      <div className="lecturer">
        <Link to="/admin/users">Users</Link>
      </div>
      {/* <div className="student">
          <Link to="/admin/students">Student</Link>
        </div> */}
      <div className="course">
        <Link to="/admin/courses">Courses</Link>
      </div>
      <div className="logout">
        <Link to="">Logout</Link>
      </div>
    </aside>
  );
};

export default AdminSidebar;
