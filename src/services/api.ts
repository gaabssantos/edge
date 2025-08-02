import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_LINK,
});

api.interceptors.request.use((config) => {
  const token = import.meta.env.VITE_AUTH;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
