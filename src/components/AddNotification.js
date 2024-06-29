import { useState, useEffect, useRef } from "react";
import useFetch from "../hooks/useFetch";

const BASE = "http://localhost:8080/api/v1";

const AddNotification = ({ isOpen, handleClose, handleNotification }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [validUntil, setValidUntil] = useState("");
  const { token } = useFetch();
  const dialogRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }
  }, [isOpen]);

  const handleClick = async () => {
    await fetch(`${BASE}/admin/notification`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        title,
        content,
        validUntil,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        handleNotification();
        handleClose();
      })
      .catch((error) => {
        console.log("Failed to add notification", error);
      });
  };

  return (
    <dialog ref={dialogRef}>
      <form>
        <fieldset>
          <legend>Add a Notification</legend>
          <label>
            Title
            <input
              type="text"
              name="title"
              required
              placeholder="Add Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <label>
            Content
            <textarea
              name="content"
              required
              placeholder="Add Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </label>
          <label>
            Valid Until
            <input
              type="date"
              name="valid-until"
              required
              value={validUntil}
              onChange={(e) => setValidUntil(e.target.value)}
            />
          </label>
          <div className="btns">
            <button type="button" onClick={handleClick}>
              Add Notification
            </button>
            <button type="button" onClick={handleClose}>
              Cancel
            </button>
          </div>
        </fieldset>
      </form>
    </dialog>
  );
};

export default AddNotification;
