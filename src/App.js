import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Login from "./pages/Login";
import LecturerLayout from "./pages/Lecturer/LecturerLayout";
// import Home from "./pages/Home";
import LecturerAttendanceSheet from "./pages/Lecturer/LecturerAttendanceSheet";
import LecturerMain from "./components/LecturerMain";
import AdminLayout from "./pages/Admin/AdminLayout";
import Lecturer from "./pages/Admin/Lecturer";
import Students from "./pages/Lecturer/Students";
import AddStudent from "./pages/Lecturer/AddStudent";
import UserForm from "./components/UserForm";
import Courses from "./pages/Admin/Courses";
import AddCourse from "./components/AddCourse";
import useFetch from "./hooks/useFetch";

function ProtectedRoutes({ children }) {
  const { hasExpired } = useFetch();
  const navigate = useNavigate();

  useEffect(() => {
    if (hasExpired) {
      navigate("/login");
    }
  }, [hasExpired, navigate]);

  return children;
}

function App() {
  return (
    <div className="App">
      <div className="contents">
        <Router>
          <Header />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/*"
              element={
                <ProtectedRoutes>
                  <Routes>
                    <Route path="/lecturer/*" element={<LecturerLayout />}>
                      <Route index element={<LecturerMain />} />
                      <Route path="dashboard" element={<LecturerMain />} />
                      <Route
                        path="attendance-sheet"
                        element={<LecturerAttendanceSheet />}
                      />
                      <Route path="students" element={<Students />} />
                      <Route path="students/add" element={<AddStudent />} />
                    </Route>
                    <Route path="/admin/*" element={<AdminLayout />}>
                      <Route index element={<LecturerMain />} />
                      <Route path="dashboard" element={<LecturerMain />} />
                      <Route
                        path="attendance"
                        element={<LecturerAttendanceSheet />}
                      />
                      <Route path="users" element={<Lecturer />} />
                      <Route path="users/add" element={<UserForm />} />
                      {/* <Route path="students" element={<Students />} />
                      <Route path="students/add" element={<AddStudent />} /> */}
                      <Route path="courses" element={<Courses />} />
                      <Route path="courses/add" element={<AddCourse />} />
                    </Route>
                  </Routes>
                </ProtectedRoutes>
              }
            />
            {/* <Route index element={<Home />} /> */}
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
