const AttendanceSheet = () => {
  const students = [
    {
      id: 1,
      name: "Mubarak Olanrewaju",
      studentId: "18/30GR050",
      status: "Present",
    },
    { id: 2, name: "Jane Doe", studentId: "18/30GR051", status: "Absent" },
    {
      id: 3,
      name: "David Omotola",
      studentId: "18/30GR049",
      status: "Present",
    },
    // Add more student records as needed
  ];

  return (
    <section className="tables">
      <table>
        <caption>Attendance Record</caption>
        <thead>
          <tr>
            <th>#</th>
            <th>Student Name</th>
            <th>Student ID</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={student.id}>
              <td>{index + 1}</td>
              <td>{student.name}</td>
              <td>{student.studentId}</td>
              <td>{student.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default AttendanceSheet;
