import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL + "/api/v1",
  withCredentials: true,
});

let accessToken: string | null = null;

export const setAccessToken = (t: string) => (accessToken = t);

api.interceptors.request.use((c) => {
  if (accessToken) c.headers.Authorization = `Bearer ${accessToken}`;
  return c;
});

export default api;
