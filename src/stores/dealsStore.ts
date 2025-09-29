import { defineStore } from 'pinia'
import type { Deal } from '@/services/dealsService.ts'
import { dealsService } from '@/services/dealsService.ts'
import type { ApiError } from '@/types/api.ts'

interface DealsState {
  deals: Deal[];
  count: number;
  errorMessage: string;
}

export const useDealsStore = defineStore('deals', {
  state: (): DealsState => ({
    deals: [],
    count: null,
    errorMessage: '',
  }),
  actions: {
    async getDeals(perPage: number = 5, page: number = 1): Promise<void> {
      this.errorMessage = '';
      try {
        const response = await dealsService.getAllPaginated(perPage, page);
        this.deals = response.data;
        if (response.meta) {
          this.count = response.meta.total;
        }
      } catch (error: ApiError) {
        this.errorMessage = error.message;
      }
    }
  }
});