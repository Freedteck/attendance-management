const StudentsList = () => {
    const students = [
        {
          id: 1,
          name: "John Doe",
          email: "john.doe@example.com",
          studentId: "S1234",
        },
        {
          id: 2,
          name: "Jane Smith",
          email: "jane.smith@example.com",
          studentId: "S5678",
        },
        {
          id: 3,
          name: "Emily Johnson",
          email: "emily.johnson@example.com",
          studentId: "S9101",
        },
        {
          id: 4,
          name: "Michael Brown",
          email: "michael.brown@example.com",
          studentId: "S1121",
        },
        {
          id: 5,
          name: "Sarah Davis",
          email: "sarah.davis@example.com",
          studentId: "S3141",
        },
      ];
      
    return ( 
        <section className="tables">
        <div className="caption">
          <caption>Current Students</caption>
          <input type="search" name="search" id="search" placeholder="Search..." />
        </div>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Student Name</th>
              <th>Email</th>
              <th>Student ID</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={student.id}>
                <td>{index + 1}</td>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.studentId}</td>
                <td className="table-btn">
                  <button>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
     );
}
 
export default StudentsList;