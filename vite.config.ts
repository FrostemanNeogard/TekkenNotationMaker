import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  server: {
    host: true,
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        tool: resolve(__dirname, "tool/index.html"),
      },
    },
  },
});
