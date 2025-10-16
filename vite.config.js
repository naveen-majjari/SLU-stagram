// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Change REPO to your repo name (or "/" if repo is USERNAME.github.io)
export default defineConfig({
  plugins: [react()],
  base: "/SLU-stagram/",   // e.g., "/mini-insta/"
});
