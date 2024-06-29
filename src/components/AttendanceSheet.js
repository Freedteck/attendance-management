const AttendanceSheet = ({ students }) => {
  // const students = [
  //   {
  //     id: 1,
  //     name: "Mubarak Olanrewaju",
  //     studentId: "18/30GR050",
  //     status: "Present",
  //   },
  //   { id: 2, name: "Jane Doe", studentId: "18/30GR051", status: "Absent" },
  //   {
  //     id: 3,
  //     name: "David Omotola",
  //     studentId: "18/30GR049",
  //     status: "Present",
  //   },
  //   // Add more student records as needed
  // ];

  return (
    <section className="tables">
      <div className="caption">
        <h3>Attendance Record</h3>
        <small>Filter button here</small>
      </div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Student Name</th>
            <th>Matric Number</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={`${student[0]}${index}${student[1]}`}>
              <td>{index + 1}</td>
              <td>{student.firstname + " " + student.lastname}</td>
              <td>{student.matriculationNumber}</td>
              <td>{student.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default AttendanceSheet;
