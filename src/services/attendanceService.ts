import privateAPI from "../api/privateAxios";

export const checkIn = (
  employeeId: string
) => {
  return privateAPI.post(
    "/api/attendance/check-in",
    {
      employeeId,
    }
  );
};

export const checkOut = (
  employeeId: string
) => {
  return privateAPI.post(
    "/api/attendance/check-out",
    {
      employeeId,
    }
  );
};