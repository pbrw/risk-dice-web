export const API_URL =
  process.env.NODE_ENV === "production"
    ? "http://api.openwars.net"
    : "http://localhost:5000";

export const SERVER_URL =
  process.env.NODE_ENV === "production"
    ? "http://openwars.net"
    : "http://localhost:3000";

export const GAME_URL = `${SERVER_URL}/game`;

export const HOME_URL = `${SERVER_URL}`;
