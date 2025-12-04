import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: "/src",
    },
  },
  server: {
    port: Number(process.env.VITE_PORT),
  },
  define: {
    APP_VERSION: JSON.stringify(process.env.npm_package_version),
    API_URL: JSON.stringify(process.env.API_URL),
  },
});
