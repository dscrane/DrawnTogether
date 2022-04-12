import axios from "axios";

const url = process.env.NODE_ENV === "production" ? "https://dsc-circle-server.herokuapp.com/" : process.env.REACT_APP_SERVER;
export const api = axios.create({
  baseURL: url
});
