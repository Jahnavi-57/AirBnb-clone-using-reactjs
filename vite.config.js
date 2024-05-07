import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

// https://vitejs.dev/config/
export default defineConfig({
  base:'/AirBnb-clone-using-reactjs/',
  plugins: [reactRefresh()],
})
