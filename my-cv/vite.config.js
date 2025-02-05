import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "./", // 👈 Viktigt! Använd "./" för att funka både lokalt och på GitHub Pages
  plugins: [react()],
});
