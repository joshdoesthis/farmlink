import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react-swc"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [tailwindcss(), react()],
  preview: { host: true, port: 3000 },
  server: { host: true, port: 3000 }
})
