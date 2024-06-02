const Notifications = () => {
  const notis = [
    { title: "Notification 1", content: "This is the first notification." },
    { title: "Notification 2", content: "This is the second notification." },
    { title: "Notification 3", content: "This is the third notification." },
    // Add more notifications as needed
  ];
  return (
    <ul className="notification">
      {notis.map((noti, index) => (
        <li key={index}>
          <h3>{noti.title}</h3>
          <p>{noti.content}</p>
        </li>
      ))}
    </ul>
  );
};

export default Notifications;
