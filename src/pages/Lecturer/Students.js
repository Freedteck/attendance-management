import { useNavigate } from "react-router-dom";
import StudentsList from "../../components/StudentsList";

const Students = () => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('./add')
    }
    
    return ( 
        <main>
        <div className="add">
            <h2>Students</h2>
            <button onClick={handleClick}>Add Student</button>
        </div>
        <StudentsList />
    </main>
     );
}
 
export default Students;