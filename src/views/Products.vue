<script setup lang="ts">
import { DataTable, Column, Button,
  Image, type DataTablePageEvent,
  Toast, useToast, Avatar } from 'primevue'
import { onMounted, ref } from 'vue'
import type { Product } from '@/services/productsService.ts'
import { useProductsStore } from '@/stores/productsStore.ts'
import { useRouter } from 'vue-router'

const productsStore = useProductsStore();
const router = useRouter();
const toast = useToast();

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
  errorMessage.value = productsStore.responseMessage;

  loading.value = false;
}

const redirectToCreatePage = async () => {
  await router.push('/products/create');
}

onMounted(async () => {
  if (productsStore.isProductCreated) {
    toast.add({
      severity: 'success',
      summary: 'Operation successful',
      detail: productsStore.responseMessage,
      life: 4000,
    });

    productsStore.isProductCreated = false;
    productsStore.responseMessage = '';
    productsStore.responseStatus = 0;
  }

  await loadDeals();
});
</script>

<template>
  <div class="flex flex-col gap-4 p-6">
    <Button class="self-end" icon="pi pi-plus" label="Create" @click="redirectToCreatePage" />
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
      <Column field="name" header="Name"></Column>
      <Column header="Image">
        <template #body="slotProps">
          <Image
            v-if="slotProps.data.image_url"
            :src="`${slotProps.data.image_url}`"
            :alt="slotProps.data.name"
            class="w-24 rounded"
            preview
          />
          <Avatar
            v-else
            icon="pi pi-times-circle"
            size="xlarge"
          />
        </template>
      </Column>
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
  </div>
  <Toast position="bottom-right" />
</template>

<style scoped>

</style>