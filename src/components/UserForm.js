import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const BASE = "http://localhost:8080/api/v1";

const UserForm = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [schoolEmail, setSchoolEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("instructor");
  const { token } = useFetch();

  const handleClick = (e) => {
    e.preventDefault();
    fetch(`${BASE}/admin/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },

      body: JSON.stringify({
        id: userId,
        firstName,
        lastName,
        schoolEmail,
        phoneNumber: phone,
        role,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        navigate(-1);
      })
      .catch((error) => {
        // Show an error message to the user
        console.error("Login failed:", error);
      });
  };
  return (
    <main>
      <h2>Add Lecturer</h2>
      <form>
        <fieldset>
          <legend>Add a Lecturer</legend>
          <div className="roles">
            <label className="role">
              <input
                type="radio"
                name="role"
                value={"instructor"}
                checked={role === "instructor"}
                onChange={(e) => setRole(e.target.value)}
              />
              Lecturer
            </label>
            <label className="role">
              <input
                type="radio"
                name="role"
                value={"student"}
                checked={role === "student"}
                onChange={(e) => setRole(e.target.value)}
              />
              Student
            </label>
          </div>
          <label>
            User Id
            <input
              type="text"
              name="first-name"
              placeholder="ID"
              required
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
          </label>
          <label>
            First Name
            <input
              type="text"
              name="first-name"
              placeholder="First name"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </label>
          <label>
            Last Name
            <input
              type="text"
              name="last-name"
              placeholder="Last name"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </label>
          <label>
            School Email
            <input
              type="email"
              name="school-email"
              required
              placeholder="School email address"
              value={schoolEmail}
              onChange={(e) => setSchoolEmail(e.target.value)}
            />
          </label>
          <label>
            Phone Number
            <input
              type="tel"
              name="phone-number"
              placeholder="Phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </label>
          {/* <div className="roles">
                        <label className="role">
                            <input type="radio" name="role" />
                            Lecturer
                        </label>
                        <label className="role">
                            <input type="radio" name="role" />
                            Admin
                        </label>
                    </div> */}
          <button onClick={handleClick}>Add Now</button>
        </fieldset>
      </form>
    </main>
  );
};

export default UserForm;
