import type { ApiResponse, PaginatedApiResponse } from '@/types/api.ts'
import api from '@/plugins/axios.ts'
import type { Product } from '@/services/productsService.ts'

export interface Deal {
  id: number;
  products: Product[];
  client: {};
  responsible: {};
  title: string;
  amount: number;
  expected_close_date: Date;
  closed_at: Date;
  notes: string;
  created_at: Date;
  updated_at: Date;
}

export const dealsService: {
  getAllPaginated: (perPage: number, page: number) => PaginatedApiResponse<Deal>,
  getById: (id: number) => ApiResponse<Deal>
} = {
  getAllPaginated: (perPage: number = 5, page: number = 1) =>
    api.get<Deal[]>(`/deals?per_page=${perPage}&page=${page}`),
  getById: (id: number) => api.get<Deal>(`/deals/${id}`),
};