export const API_URL =
  process.env.NODE_ENV === "production"
    ? "http://127.0.0.1:8080"
    : "http://localhost:8080";

export const SERVER_URL =
  process.env.NODE_ENV === "production"
    ? "http://openwars.net"
    : "http://localhost:8080";

export const GAME_URL = `${SERVER_URL}/game`;

export const HOME_URL = `${SERVER_URL}`;
