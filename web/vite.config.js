import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@", replacement: "/src" },
      { find: "~", replacement: "/src/framework" }
    ],
  },
  server: {
    port: 3000
  },
});
