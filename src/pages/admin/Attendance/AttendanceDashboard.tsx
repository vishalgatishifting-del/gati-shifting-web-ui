

import {
  checkIn,
  checkOut,
} from "../../../services/attendanceService";

const AttendanceDashboard = () => {
  const employeeId =
    localStorage.getItem(
      "employeeId"
    );

  return (
    <div className="attendance">
      <button
        onClick={() =>
          checkIn(employeeId!)
        }
      >
        Check In
      </button>

      <button
        onClick={() =>
          checkOut(employeeId!)
        }
      >
        Check Out
      </button>
    </div>
  );
};

export default AttendanceDashboard;