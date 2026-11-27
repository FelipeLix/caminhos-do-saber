import { defineConfig } from "vite-plus";

export default defineConfig({
  server: {
    port: 5173,
    proxy: {
      // Encaminha /api/* para a API Express
      "/api": "http://localhost:3001",
    },
  },
  fmt: {},
  lint: {
    jsPlugins: [{ name: "vite-plus", specifier: "vite-plus/oxlint-plugin" }],
    rules: { "vite-plus/prefer-vite-plus-imports": "error" },
    options: { typeAware: true, typeCheck: true },
  },
});
