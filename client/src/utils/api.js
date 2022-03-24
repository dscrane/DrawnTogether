import axios from "axios";
export const api = axios.create({
  baseURL: process.env.NODE_ENV === "production" ? "https://dsc-circles.herokuapp.com" : "http://localhost:5500",
});
