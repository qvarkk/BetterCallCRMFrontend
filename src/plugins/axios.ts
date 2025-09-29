import axios, { type AxiosError, type AxiosInstance } from 'axios'
import type { ApiError } from '@/types/api.ts'

const api: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  timeout: 10000,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => {
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
