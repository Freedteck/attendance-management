const LecturersList = () => {
  const lecturers = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      lecturerId: "L1234",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      lecturerId: "L5678",
    },
    {
      id: 3,
      name: "Emily Johnson",
      email: "emily.johnson@example.com",
      lecturerId: "L9101",
    },
    {
      id: 4,
      name: "Michael Brown",
      email: "michael.brown@example.com",
      lecturerId: "L1121",
    },
    {
      id: 5,
      name: "Sarah Davis",
      email: "sarah.davis@example.com",
      lecturerId: "L3141",
    },
  ];

  return (
    <section className="tables">
      <div className="caption">
        <caption>Current Lecturers</caption>
        <input type="search" name="search" id="search" placeholder="Search..." />
      </div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Lecturer Name</th>
            <th>Email</th>
            <th>Lecturer ID</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {lecturers.map((lecturer, index) => (
            <tr key={lecturer.id}>
              <td>{index + 1}</td>
              <td>{lecturer.name}</td>
              <td>{lecturer.email}</td>
              <td>{lecturer.lecturerId}</td>
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
};

export default LecturersList;
