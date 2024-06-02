import { useNavigate } from "react-router-dom";

const AddStudent = () => {
    const navigate = useNavigate()

    const handleClick = (e) => {
        e.preventDefault()
        navigate(-1)
    }
    return ( 
        <main>
            <h2>Add Student</h2>
            <form>
                <fieldset>
                    <legend>Add a Student</legend>
                    <label>
                        Student Id
                        <input type="text" name="student-id" required placeholder="Student ID"/> 
                    </label>
                    <select name="course" id="course" required>
                        <option value="" disabled selected>Select course</option>
                        <option value="cpe504">CPE 504</option>
                        <option value="mee502">MEE 502</option>
                        <option value="ele202">ELE 202</option>
                    </select>
                    <button onClick={handleClick}>Add Now</button>
                </fieldset>
            </form>
        </main>
     );
}
 
export default AddStudent;