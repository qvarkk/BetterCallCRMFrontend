import type { ApiMessage, ApiResponse, PaginatedApiResponse } from '@/types/api.ts'
import api from '@/plugins/axios.ts'

export interface Product {
  id: number;
  name: string;
  sku: string;
  price: number;
  description: string;
  image_url: string;
  is_active: boolean;
  created_at: Date;
  updated_at: Date;
}

export const productsService: {
  getAllPaginated: (perPage: number, page: number) => PaginatedApiResponse<Product>,
  getById: (id: number) => ApiResponse<Product>,
  createProduct: (formData: FormData) => ApiMessage,
} = {
  getAllPaginated: (perPage: number = 5, page: number = 1) =>
    api.get<Product[]>(`/products?per_page=${perPage}&page=${page}`),
  getById: (id: number) => api.get<Product>(`/products/${id}`),
  createProduct: (formData: FormData) => api.post('/products', formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  }),
};