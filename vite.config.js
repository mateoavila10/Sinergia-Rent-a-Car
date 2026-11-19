import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // OPENWEATHER_KEY: así quedó guardada la key del clima en Vercel.
  // Ojo: cualquier variable con estos prefijos termina visible en el navegador.
  envPrefix: ['VITE_', 'OPENWEATHER_KEY'],
})
