import { useNavigate } from "react-router-dom";

const UserForm = () => {
    const navigate = useNavigate()

    const handleClick = (e) => {
        e.preventDefault()
        navigate('../lecturers')
    }
    return ( 
        <main>
            <h2>Add Lecturer</h2>
            <form>
                <fieldset>
                    <legend>Add a Lecturer</legend>
                    <label>
                        User Id
                        <input type="text" name="first-name" placeholder="ID" required />
                    </label>
                    <label>
                        First Name
                        <input type="text" name="first-name" placeholder="First name" required />
                    </label>
                    <label>
                        Last Name
                        <input type="text" name="last-name" placeholder="Last name" required />
                    </label>
                    <label>
                        School Email
                        <input type="email" name="school-email" required placeholder="School email address" />
                    </label>
                    <label>
                        Phone Number
                        <input type="tel" name="phone-number" placeholder="Phone number" />
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
}
 
export default UserForm;