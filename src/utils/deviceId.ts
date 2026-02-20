export const getDeviceId = (): string => {

  let deviceId = localStorage.getItem("deviceId");

  // agar exist nahi karta, to new generate karo
  if (!deviceId) {

    deviceId = crypto.randomUUID();

    localStorage.setItem("deviceId", deviceId);

  }

  return deviceId;

};