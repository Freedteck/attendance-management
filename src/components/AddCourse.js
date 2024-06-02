import { useNavigate } from "react-router-dom";

const AddCourse = () => {
  const navigate = useNavigate()

  const handleClick = (e) => {
    e.preventDefault()
    navigate(-1)
  }
  return (
    <main>
      <h2>Add Course</h2>

      <form>
        <fieldset>
          <legend>Add a Course</legend>
          <label>
            Subject Code
            <input type="text" name="subject-code" required placeholder="Add Subject code" />
          </label>
          <label>
            Subject Title
            <input type="text" name="subject-title" required placeholder="Add Subject title" />
          </label>
          <label>
            Lecturer in charge
            <select name="lecturer-id" id="lecturer-id" required>
              <option value="" disabled selected>Enter ID of the Lecturer</option>
              <option value="i1001">i1001</option>
              <option value="j2041">j2041</option>
              <option value="61041">61041</option>
            </select>
          </label>
          <button onClick={handleClick}>Add Now</button>
        </fieldset>
      </form>
    </main>
  );
};

export default AddCourse;
