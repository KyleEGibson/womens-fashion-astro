import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://museandthread.example.com",
  integrations: [sitemap()],
});
