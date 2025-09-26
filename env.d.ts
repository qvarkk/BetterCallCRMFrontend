/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_APPNAME: string;
  readonly VITE_APP_CLIENT_ID: string;
  readonly VITE_APP_CLIENT_SECRET: string;
  readonly VITE_APP_BACKEND_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}