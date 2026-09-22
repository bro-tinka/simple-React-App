import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// OLD :  
// https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})
