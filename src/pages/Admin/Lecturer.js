import { useNavigate } from "react-router-dom";
import LecturersList from "../../components/LecturersList";

const Lecturer = () => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('./add')
    }
    return ( 
        <main>
            <div className="add">
                <h2>Lecturers</h2>
                <button onClick={handleClick}>Add Lecturer</button>
            </div>
            <LecturersList />
        </main>
     );
}
 
export default Lecturer;