// src/utils/sourceTracker.js
export const getUserSource = () => {
  const params = new URLSearchParams(window.location.search);
  let source = params.get("utm_source") || params.get("source");

  if (source) return source;

  const ref = document.referrer;

  if (ref.includes("google")) return "google";
  if (ref.includes("whatsapp")) return "whatsapp";
  if (ref.includes("facebook")) return "facebook";
  if (ref.includes("instagram")) return "instagram";
  if (ref) return "referral";

  return "direct";
};
