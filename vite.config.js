import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/", // this is correct. it allows for both local testing and hashrouting on gh pages
  plugins: [react()],
});
