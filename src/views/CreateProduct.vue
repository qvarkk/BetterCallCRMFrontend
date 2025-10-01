<script setup lang="ts">
import { InputText, Fluid, Button, Textarea,
  Message, InputNumber, IftaLabel, FileUpload,
  Toast, useToast, type FileUploadSelectEvent,
  ToggleSwitch } from 'primevue'
import { useProductsStore } from '@/stores/productsStore.ts'
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'

const productsStore = useProductsStore();
const router = useRouter();
const toast = useToast();

const loading = ref<boolean>(false);
const name = ref<string>('');
const sku = ref<string>('');
const price = ref<number>(0);
const description = ref<string>('');
const isActive = ref<boolean>(true);
const image = ref<File>(null);

const isFormValid = computed(() => {
  return name.value.trim() && sku.value.trim() && description.value.trim();
});

const onSelect = (event: FileUploadSelectEvent) => {
  const file: File = Array.isArray(event.files) ? event.files[0] : event.files;
  if (file) {
    image.value = file;
  } else {
    image.value = null;
  }
}

const createProduct = async () => {
  loading.value = true;

  const formData = new FormData();
  formData.append('name', name.value);
  formData.append('sku', sku.value);
  formData.append('price', price.value);
  formData.append('description', description.value);
  formData.append('is_active', isActive.value ? 1 : 0);

  formData.append('image', image.value);

  await productsStore.createProduct(formData);
  if (productsStore.responseStatus !== 201) {
    toast.add({
      severity: 'error',
      summary: "Couldn't create product",
      detail: productsStore.responseMessage,
      life: 4000,
    });
  } else {
    productsStore.isProductCreated = true;
    await router.push('/products');
  }

  loading.value = false;
};

const redirectBack = async () => {
  await router.push('/products');
};
</script>

<template>
  <div class="flex justify-center">
    <form v-on:submit.prevent="createProduct" class="max-w-[720px] w-full p-2 flex flex-col gap-4">
      <div class="flex flex-col items-start">
        <Button icon="pi pi-arrow-left" label="Back" variant="link" @click="redirectBack" />
        <h2 class="text-2xl self-center">Create product</h2>
      </div>
      <IftaLabel>
        <InputText type="text" id="name" v-model="name" fluid />
        <label for="name">Name</label>
      </IftaLabel>
      <IftaLabel>
        <InputText type="text" id="sku" v-model="sku" fluid />
        <label for="sku">SKU</label>
        <Message size="small" severity="secondary" variant="simple">Unique identifier of the product.</Message>
      </IftaLabel>
      <IftaLabel>
        <Textarea id="description" v-model="description" rows="5" style="resize: none" fluid />
        <label for="description">Description</label>
      </IftaLabel>
      <IftaLabel>
        <InputNumber v-model="price" inputId="price" mode="currency" currency="USD" locale="en-US" fluid />
        <label for="price">Price</label>
      </IftaLabel>
      <div class="flex flex-col gap-2">
        <span class="text-xl">Product image</span>
        <FileUpload
          id="image"
          :multiple="false"
          :fileLimit="1"
          :showUploadButton="false"
          accept="image/*"
          :maxFileSize="10000000"
          @select="onSelect"
        >
          <template #empty>
            <span>Drag and drop files to here to upload.</span>
          </template>
        </FileUpload>
      </div>
      <div class="flex gap-2">
        <ToggleSwitch inputId="isActive" v-model="isActive" />
        <label for="isActive">Activate product</label>
      </div>
      <Button :loading="loading" :disabled="!isFormValid || loading" type="submit" label="Create" />
    </form>
  </div>
  <Toast position="bottom-right" />
</template>

<style scoped>
:deep(.p-fileupload-file-badge) {
  display: none;
}
</style>