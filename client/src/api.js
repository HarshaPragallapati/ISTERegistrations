import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL, // this will point to Render backend in production
  withCredentials: true
});

export default api;
