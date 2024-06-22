// import BarChart from "./BarChart";

import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import Notifications from "./Notifications";

const BASE = "http://localhost:8080/api/v1";

const NotificationSection = () => {
  // const data = [65, 59, 80, 81, 56, 55, 40];
  const { token } = useFetch();
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const handleAddNotification = async () => {
      await fetch(`${BASE}/general/notification`, {
        mode: "cors",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setNotifications(data.data);
        })
        .catch((error) => {
          // Show an error message to the user
          console.error("Login failed:", error);
        });
    };
    handleAddNotification();
  }, [token]);
  return (
    <div className="notification-section">
      <h2>Notifications</h2>
      <div>
        <Notifications notifications={notifications} />
      </div>
    </div>
  );
};

export default NotificationSection;
