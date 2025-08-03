import axios from "axios";

export const createApi = (apiKey: string | null) => {
  const instance = axios.create({
    baseURL: import.meta.env.VITE_API_LINK,
  });

  instance.interceptors.request.use((config) => {
    if (apiKey) {
      config.headers.Authorization = `Bearer ${apiKey}`;
    }
    return config;
  });

  return instance;
}