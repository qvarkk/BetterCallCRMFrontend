import axios, { type AxiosError, type AxiosInstance } from 'axios'
import type { ApiError } from '@/types/api.ts'

const api: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_BACKEND_URL,
  timeout: 10000,
});

api.interceptors.response.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => {
    if (response.data && typeof response.data === "object" && "data" in response.data) {
      return response.data.data;
    }
    return response.data;
  },
  (error: AxiosError) => {
    let apiError: ApiError = {
      message:
        (error.response?.data as any)?.message ??
        (error.request ? "No response from server" : error.message),
      status: error.response?.status,
    };

    return Promise.reject(apiError);
  }
);

export default api;
