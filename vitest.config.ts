import { mergeConfig } from 'vite';
import { configDefaults, defineConfig } from 'vitest/config';
import viteConfig from './vite.config';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      // Exclude e2e test files
      exclude: [...configDefaults.exclude, 'e2e/*', '*.spec.ts'],
    },
  })
);
