import { useEffect, useState } from "react";
import InitializeAttendance from "./InitializeAttendance";

const Initialize = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [initialized, setInitialized] = useState(false);

  const code = localStorage.getItem("code");
  const handleClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (code) {
      setInitialized(true);
    }
  }, [code]);

  return (
    <div className="initialize">
      {initialized && <h2>{code}</h2>}
      {!initialized && (
        <>
          <p>No attendance has been initialized Yet</p>
          <button className="initialize-btn" onClick={handleClick}>
            Initialize now
          </button>
          <InitializeAttendance isOpen={isOpen} handleClose={handleClose} />
        </>
      )}
    </div>
  );
};

export default Initialize;
