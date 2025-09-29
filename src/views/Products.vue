<script setup lang="ts">
import { DataTable, Column, type DataTablePageEvent } from 'primevue'
import { onMounted, ref } from 'vue'
import type { Product } from '@/services/productsService.ts'
import { useProductsStore } from '@/stores/productsStore.ts'

const productsStore = useProductsStore();

const loading = ref<boolean>(true);
const errorMessage = ref<string>('');
const perPage = ref<number>(5);
const page = ref<number>(1);
const products = ref<Product[]>([]);

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

  await productsStore.getProducts(perPage.value, page.value);
  products.value = productsStore.products;
  errorMessage.value = productsStore.errorMessage;

  loading.value = false;
}

onMounted(async () => {
  await loadDeals();
});
</script>

<template>
  <DataTable
    :value="products"
    :lazy="true"
    :loading="loading"
    :paginator="true"
    :rows="perPage"
    :page="page"
    :rows-per-page-options="[2, 5, 10]"
    :total-records="productsStore.count"
    @page="onPageChange"
  >
    <Column field="id" header="ID"></Column>
    <Column field="name" header="Name"></Column>
    <Column field="sku" header="SKU"></Column>
    <Column field="price" header="Price">
      <template #body="slotProps">
        ${{ slotProps.data.price }}
      </template>
    </Column>
    <Column field="is_active" header="Is Active">
      <template #body="slotProps">
        {{ slotProps.data.is_active ? 'Yes' : 'No' }}
      </template>
    </Column>
    <Column field="description" header="Description"></Column>
  </DataTable>
  <span v-if="errorMessage" class="text-red-500">
    {{ errorMessage }}
  </span>
</template>

<style scoped>

</style>