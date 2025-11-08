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
  if (ref.includes("justdial")) return "justdial";
  if (ref.includes("sulekha")) return "sulekha";
  if (ref.includes("adsense")) return "adsense";
  if (ref.includes("metaads")) return "metaads";
  if (ref) return "referral";

  // Whatsapp = http://localhost:5173/?utm_source=whatsapp
  // Facebook = http://localhost:5173/?utm_source=facebook
  // Instagram = http://localhost:5173/?utm_source=instagram
  // Justdial = http://localhost:5173/?utm_source=justdial
  // Sulekha = http://localhost:5173/?utm_source=sulekha

  return "direct";
};
