import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handleLogin = (btn) => {
    navigate("/login");
    btn.style.display = 'none'
  };
  return (
    <nav className="navbar-header container">
      <h1>Attendiix</h1>
      {/* <div>
                user details here
            </div> */}
      <button onClick={(e) => handleLogin(e.target)}>Login</button>
    </nav>
  );
};

export default Header;
