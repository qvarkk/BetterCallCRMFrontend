import { defineStore } from 'pinia'
import type { ApiError, ApiMessage, ApiResponse } from '@/types/api.ts'
import { type Product, productsService } from '@/services/productsService.ts'
import type { Api } from '@vitejs/plugin-vue'

interface ProductsState {
  products: Product[];
  count: number;
  responseMessage: string;
  responseStatus: number;
  isProductCreated: boolean;
}

export const useProductsStore = defineStore('products', {
  state: (): ProductsState => ({
    products: [],
    count: null,
    responseMessage: '',
    responseStatus: 0,
    isProductCreated: false,
  }),
  actions: {
    async getProducts(perPage: number = 5, page: number = 1): Promise<void> {
      this.responseMessage = '';
      try {
        const response = await productsService.getAllPaginated(perPage, page);
        this.products = response.data;
        if (response.meta) {
          this.count = response.meta.total;
        }
      } catch (error: ApiError) {
        this.responseMessage = error.message;
      }
    },
    async createProduct(formData) {
      this.responseMessage = '';
      try {
        const response = await productsService.createProduct(formData);
        console.log(response);
        this.responseMessage = response.message;
        this.responseStatus = response.code;
      } catch (error: ApiError) {
        this.responseMessage = error.message;
        this.responseStatus = error.status;
      }
    },
  }
});