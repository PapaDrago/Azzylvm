import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // O también puedes especificar tu IP, ej: '192.168.1.10'
    port: 3000, // Opcional, para cambiar el puerto
  },
  base: "https://papadrago.github.io/Azzylvm",
});
