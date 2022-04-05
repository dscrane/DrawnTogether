import axios from "axios";
console.log(process.env.NODE_ENV);
const url = process.env.NODE_ENV === "production" ? "https://dsc-circles.herokuapp.com" : "http://localhost:5500";
export const api = axios.create({
  baseURL: url,
});
