import axios from "axios";

const url = process.env.NODE_ENV === "production" ? "https://dsc-circle-server.herokuapp.com" : "http://localhost:5500";
export const api = axios.create({
  baseURL: url,
});
