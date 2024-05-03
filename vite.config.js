import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base:'/AirBnb-clone-using-reactjs/',
  plugins: [react()],
})
