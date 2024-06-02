import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    if (userName === 'Lecturer') {
      navigate('/lecturer')
    } else if (userName === 'Admin') {
      navigate('/admin')
    }
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
              <input type="radio" name="role" />
              Lecturer
            </label>
            <label className="role">
              <input type="radio" name="role" />
              Admin
            </label>
          </div>
          <label>
            Id
            <input type="text" name="user-id" value={userName} onChange={(e) => setUserName(e.target.value)} />
          </label>
          <label>
            Password
            <input type="password" name="password" />
          </label>
          <button onClick={handleLogin}>Login</button>
        </form>
      </section>
    </div>
  );
};

export default Login;
