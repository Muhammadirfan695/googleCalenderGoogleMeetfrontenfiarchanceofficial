
// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import path from 'path'

// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, './src'),
//     },
//   },
//   server: {
//     watch: {
//       usePolling: true, // Enable polling (useful in some environments)
//     },
//     strictPort: true,  // Ensures Vite runs on a fixed port
//     host: true,        // Allows network access
//   },
// })


// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import path from 'path'

// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, './src'),
//     },
//   },
//   server: {
//     watch: {
//       usePolling: true, // Enable polling (useful in some environments)
//     },
//     strictPort: true,  // Ensures Vite runs on a fixed port
//     host: true,        // Allows network access
//     headers: {
//       "Content-Security-Policy": "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://apis.google.com https://www.gstatic.com;",
//     },
//   },
// })
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    watch: {
      usePolling: true, // Enable polling (useful in some environments)
    },
    strictPort: true,  // Ensures Vite runs on a fixed port
    host: true,        // Allows network access
    headers: {
      "Content-Security-Policy": "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://apis.google.com https://www.gstatic.com;",
    },
  },
  define: {
    'process.env': {}, 
  },
})
