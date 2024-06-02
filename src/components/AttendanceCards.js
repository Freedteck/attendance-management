const AttendanceCards = () => {
  return (
    <section className="attendance-cards">
      <div className="card">
        <div className="date">
          <p>
            Present<span>| Today</span>
          </p>
        </div>
        <div className="total">
          <div className="icon"></div>
          <div className="number">
            <h3>145</h3>
            <p>
              12% <span>increase</span>
            </p>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="date">
          <p>
            Absent<span>| Today</span>
          </p>
        </div>
        <div className="total">
          <div className="icon"></div>
          <div className="number">
            <h3>145</h3>
            <p>
              12% <span>increase</span>
            </p>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="date">
          <p>
            Attendance<span>| This month</span>
          </p>
        </div>
        <div className="total">
          <div className="icon"></div>
          <div className="number">
            <h3>145</h3>
            <p>
              12% <span>increase</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AttendanceCards;
