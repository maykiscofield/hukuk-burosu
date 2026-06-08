import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";

export default defineConfig({
  plugins: [
    tanstackStart(),
    tsconfigPaths(),
  ],
  // Vinxi'ye doğrudan üst katmandan cloudflare-pages preset'ini dikte ediyoruz
  // @ts-ignore
  app: {
    server: {
      preset: "cloudflare-pages"
    }
  }
});