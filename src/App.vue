<script lang="ts">
import { useAuthStore } from '@/stores/authStore.ts';
import type { StoreDefinition } from 'pinia'
import Button from 'primevue/button';
import Menubar from 'primevue/menubar';
import InputText from 'primevue/inputtext';
import type { User } from '@/services/authService.ts'

interface MenubarItem {
  label: string;
  icon: string;
  route: string;
}

export default {
  components: {Button, Menubar, InputText},
  data(): {
    email: string,
    password: string,
    authStore: StoreDefinition
    items: MenubarItem[]
  } {
    return {
      email: '',
      password: '',
      authStore: useAuthStore(),
      items: [
        {
          label: 'Home',
          icon: 'pi pi-fw pi-home',
          route: '/',
        },
        {
          label: 'Deals',
          icon: 'pi pi-fw pi-money-bill',
          route: '/deals'
        },
        {
          label: 'Products',
          icon: 'pi pi-fw pi-objects-column',
          route: '/products'
        },
      ],
    }
  },
  computed: {
    isAuthenticated(): boolean {
      return this.authStore.isAuthenticated;
    },
    user(): User {
      return this.authStore.user;
    },
    authError(): string {
      return this.authStore.errorMessage;
    }
  },
  methods: {
    logout(): void {
      this.authStore.logout();
    },
    login(): void {
      this.authStore.login(this.email, this.password);
    },
  },
  mounted() {
    const token = localStorage.getItem('token');
    if (token) {
      this.authStore.isAuthenticated = true;
      this.authStore.getUser();
    }
  }
}
</script>

<template>
  <Menubar :model="items">
    <template #start>
      <span>
        <img src="@/assets/logo.svg" width="50" alt="Icon" />
      </span>
    </template>
    <template #item="{ item, props, hasSubmenu, root }">
      <a class="flex items-center ml-6 p-4">
        <router-link v-if="item.route" :to="item.route">
          <span :class="item.icon" />
          <span class="ml-1">{{ item.label }}</span>
        </router-link>
      </a>
    </template>
    <template #end>
      <div v-if="isAuthenticated && user">
        <span class="pi pi-fw pi-user mr-4" /> {{ user.first_name }}
        <Button @click="logout" class="ml-4">Logout</Button>
      </div>
      <div v-else>
        <form @submit.prevent="login">
          <InputText v-model="email" type="email" id="email" required
                     placeholder="Email" class="m-2 sm:w-auto"
                     :class="{'p-invalid': authError}" />
          <InputText v-model="password" type="password" id="password"
                     required placeholder="Password" class="m-2 sm:w-auto"
                     :class="{'p-invalid': authError}" />
          <Button type="submit">Login</Button>
          <p v-if="authError" class="error">{{ authError }}</p>
        </form>
      </div>
    </template>
  </Menubar>
  <router-view></router-view>
</template>

<style scoped>
.error {
  color: red;
}
</style>
ф