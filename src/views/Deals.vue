<script setup lang="ts">
import { useDealsStore } from '@/stores/dealsStore.ts';
import { DataTable, Column, Chip, type DataTablePageEvent } from 'primevue'
import { onMounted, ref } from 'vue'
import type { Deal } from '@/services/dealsService.ts'

const dealsStore = useDealsStore();

const loading = ref<boolean>(true);
const errorMessage = ref<string>('');
const perPage = ref<number>(5);
const page = ref<number>(1);
const deals = ref<Deal[]>([]);

const onPageChange = async (event: DataTablePageEvent) => {
  // +1 because PrimeVue counts pages from 0
  // and laravel counts pages from 1
  page.value = event.page + 1;
  perPage.value = event.rows;
  await loadDeals();
};

const loadDeals = async () => {
  loading.value = true;
  errorMessage.value = '';

  await dealsStore.getDeals(perPage.value, page.value);
  deals.value = dealsStore.deals;
  errorMessage.value = dealsStore.errorMessage;

  loading.value = false;
}

onMounted(async () => {
  await loadDeals();
});

</script>

<template>
  <DataTable
    :value="deals"
    :lazy="true"
    :loading="loading"
    :paginator="true"
    :rows="perPage"
    :page="page"
    :rows-per-page-options="[2, 5, 10]"
    :total-records="dealsStore.count"
    @page="onPageChange"
  >
    <Column field="id" header="ID"></Column>
    <Column field="title" header="Title"></Column>
    <Column field="products" header="Products">
      <template #body="slotProps">
        <div class="flex flex-wrap gap-1">
          <Chip v-for="product in slotProps.data.products"
                :key="product.id"
                :label="product.name"
                class="text-xs" />
        </div>
      </template>
    </Column>
    <Column field="amount" header="Amount">
      <template #body="slotProps">
        ${{ slotProps.data.amount }}
      </template>
    </Column>
    <Column field="expected_close_date" header="Expected Close"></Column>
    <Column field="closed_at" header="Closed At"></Column>
    <Column field="notes" header="Notes"></Column>
  </DataTable>
  <span v-if="errorMessage" class="text-red-500">
    {{ errorMessage }}
  </span>
</template>

<style scoped>

</style>