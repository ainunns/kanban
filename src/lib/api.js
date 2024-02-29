import axios from "axios";

export const baseURL = process.env.REACT_APP_API_URL;
export const bearerToken = process.env.REACT_APP_BEARER_TOKEN;

const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${bearerToken}`,
  },

  withCredentials: false,
});

api.defaults.withCredentials = false;

export default api;
