import React from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
// import { useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const { hasExpired, userRoles } = useFetch();
  // const [dashboardOpened, setDashboardOpened] = useState(false);

  // const handleLogin = () => {
  //   navigate("/login");
  // };

  const handleDashboardClick = () => {
    if (userRoles.includes("ROLE_SUPER_ADMIN")) {
      navigate("/admin");
    } else if (userRoles.includes("ROLE_LECTURER")) {
      navigate("/lecturer");
    }
  };

  return (
    <nav className="navbar-header container">
      <h1>Attendiix</h1>
      {/* <div>
                user details here
            </div> */}
      {/* {hasExpired && <button onClick={handleLogin}>Login</button>} */}
      {!hasExpired && (
        <button onClick={handleDashboardClick}>Go to dashboard</button>
      )}
    </nav>
  );
};

export default Header;
