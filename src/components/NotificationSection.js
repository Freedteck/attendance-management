import { useCallback, useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import Notifications from "./Notifications";
import AddNotification from "./AddNotification";

const BASE = "http://localhost:8080/api/v1";

const NotificationSection = () => {
  // const data = [65, 59, 80, 81, 56, 55, 40];
  const { token, userRoles } = useFetch();
  const [showAddBtn, setShowAddBtn] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const showForm = () => {
    setIsOpen(true);
  };
  const closeForm = () => {
    setIsOpen(false);
  };

  const handleGetNotification = useCallback(async () => {
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
  }, [token]);

  useEffect(() => {
    handleGetNotification();
  }, [handleGetNotification]);

  useEffect(() => {
    if (
      (userRoles && userRoles.includes("ROLE_SUPER_ADMIN")) ||
      userRoles.includes("ROLE_ADMIN")
    ) {
      setShowAddBtn(true);
    }
  }, [userRoles]);
  return (
    <div className="notification-section">
      <div className="top">
        <h2>Notifications</h2>
        {showAddBtn && <button onClick={showForm}>+</button>}
      </div>
      <div>
        <Notifications notifications={notifications} />
      </div>
      {isOpen && (
        <AddNotification
          isOpen={isOpen}
          handleClose={closeForm}
          handleNotification={handleGetNotification}
        />
      )}
    </div>
  );
};

export default NotificationSection;
