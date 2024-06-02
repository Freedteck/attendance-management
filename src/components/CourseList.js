const CourseList = () => {
    const courses = [
        {
          courseCode: "CPE504",
          courseTitle: "Computer Engineering",
          lecturerInCharge: {
            name: "John Doe",
            id: "L1234",
          },
        },
        {
          courseCode: "MEE502",
          courseTitle: "Mechanical Engineering",
          lecturerInCharge: {
            name: "Jane Smith",
            id: "L5678",
          },
        },
        {
          courseCode: "ELE202",
          courseTitle: "Electrical Engineering",
          lecturerInCharge: {
            name: "Emily Johnson",
            id: "L9101",
          },
        },
        {
          courseCode: "CHE301",
          courseTitle: "Chemical Engineering",
          lecturerInCharge: {
            name: "Michael Brown",
            id: "L1121",
          },
        },
        {
          courseCode: "CIV204",
          courseTitle: "Civil Engineering",
          lecturerInCharge: {
            name: "Sarah Davis",
            id: "L3141",
          },
        },
      ];
      
    return (
        <section className="tables">
        <div className="caption">
          <caption>Current Courses</caption>
          <input type="search" name="search" id="search" placeholder="Search..." />
        </div>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Course Code</th>
              <th>Course Title</th>
              <th>Lecturer Name</th>
              <th>Lecturer ID</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, index) => (
              <tr key={course.id}>
                <td>{index + 1}</td>
                <td>{course.courseCode}</td>
                <td>{course.courseTitle}</td>
                <td>{course.lecturerInCharge.name}</td>
                <td>{course.lecturerInCharge.id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
     );
}
 
export default CourseList;