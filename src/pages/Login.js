import { useState } from "react";
import { useNavigate } from "react-router-dom";

const BASE = "http://localhost:8080/api/v1";

const Login = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  function setToken(token, date, userRoles) {
    localStorage.setItem("jwtToken", token);
    localStorage.setItem("expiryDate", date);
    localStorage.setItem("userRoles", userRoles);
    localStorage.setItem("tokenIssueTime", Date.now());
    // scheduleTokenExpiry();
  }
  const handleLogin = (e) => {
    e.preventDefault();
    fetch(`${BASE}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: userId, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        setToken(data.jwt_token, data.expiryDate, data.user_roles);
        // console.log(data);
        if (data.user_roles.includes("ROLE_SUPER_ADMIN") && role === "admin") {
          navigate("/admin");
        } else if (
          data.user_roles.includes("ROLE_LECTURER") &&
          role === "lecturer"
        ) {
          navigate("/lecturer");
        }
      })
      .catch((error) => {
        // Show an error message to the user
        console.error("Login failed:", error);
      });
  };

  return (
    <div className="form-page container">
      <section className="desc">
        <h1>
          Attendance <br /> for your simplicity
        </h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta rerum
          neque ipsum, quo perferendis laborum distinctio minus mollitia porro
          doloremque ut est voluptatibus, reiciendis natus deserunt beatae
          dolorem molestias eligendi.
        </p>
      </section>
      <section className="form">
        <form>
          <div className="roles">
            <label className="role">
              <input
                type="radio"
                name="role"
                value={"lecturer"}
                checked={role === "lecturer"}
                onChange={(e) => setRole(e.target.value)}
              />
              Lecturer
            </label>
            <label className="role">
              <input
                type="radio"
                name="role"
                value={"admin"}
                checked={role === "admin"}
                onChange={(e) => setRole(e.target.value)}
              />
              Admin
            </label>
          </div>
          <label>
            Id
            <input
              type="text"
              name="user-id"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
          </label>
          <label>
            Password
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button onClick={handleLogin}>Login</button>
        </form>
      </section>
    </div>
  );
};

export default Login;
