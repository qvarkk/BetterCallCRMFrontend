import api from '@/plugins/api.ts';

export interface Auth {
  user: User;
  token: string;
}

export interface LogoutResponse {
  message: string;
}

export interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  created_at: Date;
  updated_at: Date;
  email_verified: boolean;
}

export const authService = {
  login: (email: string, password: string) => api.post<Auth>('/login', { email, password }),
  getUser: () => api.get<User>('/user'),
  logout: () => api.post<LogoutResponse>('/logout'),
};