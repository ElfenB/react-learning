/* eslint-disable @typescript-eslint/consistent-type-definitions */
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_PACKAGE_VERSION?: string;
  readonly VITE_PROXY_URL: string;
}
