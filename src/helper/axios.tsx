import axios from "axios";

export const myAxios = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL_DEV,
  withCredentials: true,
});
