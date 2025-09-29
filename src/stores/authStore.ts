import { defineStore } from 'pinia'
import { type Auth, authService, type User } from '@/services/authService.ts'
import type { ApiError, ApiResponse } from '@/types/api.ts'

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: false;
  errorMessage: string;
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    user: null,
    token: localStorage.getItem('token') || null,
    isAuthenticated: false,
    errorMessage: '',
  }),
  actions: {
    async login(email: string, password: string): Promise<void> {
      this.errorMessage = '';
      try {
        const response = await authService.login(email, password);
        this.token = response.data.token;
        this.user = response.data.user;
        this.isAuthenticated = true;
        localStorage.setItem('token', this.token);
      } catch (error: ApiError) {
        this.errorMessage = error.message;
      }
    },
    async getUser(): Promise<User> {
      this.errorMessage = '';
      try {
        const userResponse = await authService.getUser();
        this.user = userResponse.data;
      } catch (error: ApiError) {
        this.errorMessage = error.message;
      }
    },
    async logout(): Promise<void> {
      this.token = null;
      this.user = null;
      this.isAuthenticated = false;
      localStorage.removeItem('token');
      await authService.logout();
    }
  }
});