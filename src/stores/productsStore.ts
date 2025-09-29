import { defineStore } from 'pinia'
import type { ApiError } from '@/types/api.ts'
import { type Product, productsService } from '@/services/productsService.ts'

interface ProductsState {
  products: Product[];
  count: number;
  errorMessage: string;
}

export const useProductsStore = defineStore('products', {
  state: (): ProductsState => ({
    products: [],
    count: null,
    errorMessage: '',
  }),
  actions: {
    async getProducts(perPage: number = 5, page: number = 1): Promise<void> {
      this.errorMessage = '';
      try {
        const response = await productsService.getAllPaginated(perPage, page);
        this.products = response.data;
        if (response.meta) {
          this.count = response.meta.total;
        }
      } catch (error: ApiError) {
        this.errorMessage = error.message;
      }
    }
  }
});