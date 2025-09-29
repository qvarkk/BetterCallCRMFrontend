import type { ApiResponse, PaginatedApiResponse } from '@/types/api.ts'
import api from '@/plugins/axios.ts'

export interface Product {
  id: number;
  name: string;
  sku: string;
  price: number;
  description: string;
  is_active: boolean;
  created_at: Date;
  updated_at: Date;
}

export const productsService: {
  getAllPaginated: (perPage: number, page: number) => PaginatedApiResponse<Product>,
  getById: (id: number) => ApiResponse<Product>
} = {
  getAllPaginated: (perPage: number = 5, page: number = 1) =>
    api.get<Product[]>(`/products?per_page=${perPage}&page=${page}`),
  getById: (id: number) => api.get<Product>(`/products/${id}`),
};