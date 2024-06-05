import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import dotenv from 'dotenv'

// 環境変数を読み込む
dotenv.config()

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./",
  define: {
    'process.env': {
      VITE_API_KEY: JSON.stringify(process.env.VITE_API_KEY),
      VITE_AUTH_DOMAIN: JSON.stringify(process.env.VITE_AUTH_DOMAIN),
      VITE_PROJECT_ID: JSON.stringify(process.env.VITE_PROJECT_ID),
      VITE_STORAGE_BUCKET: JSON.stringify(process.env.VITE_STORAGE_BUCKET),
      VITE_MESSAGING_SENDER_ID: JSON.stringify(process.env.VITE_MESSAGING_SENDER_ID),
      VITE_APP_ID: JSON.stringify(process.env.VITE_APP_ID),
      VITE_MEASUREMENT_ID: JSON.stringify(process.env.VITE_MEASUREMENT_ID),
    }
  }
})
