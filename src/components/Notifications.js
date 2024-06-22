const Notifications = ({ notifications }) => {
  // const notis = [
  //   { title: "Notification 1", content: "This is the first notification." },
  //   { title: "Notification 2", content: "This is the second notification." },
  //   { title: "Notification 3", content: "This is the third notification." },
  //   // Add more notifications as needed
  // ];
  return (
    <ul className="notification">
      {notifications.map((notification, index) => (
        <li key={` ${notification[0]}${index}${notification[1]}`}>
          <h3>{notification.title}</h3>
          <p>{notification.content}</p>
        </li>
      ))}
    </ul>
  );
};

export default Notifications;
