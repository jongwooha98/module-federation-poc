import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 5174
  },
  plugins: [react(), federation({
    name: 'vite-react-2',
    filename: 'remoteEntry.js',
    exposes: {
      './Button': {
        name: 'Button',
        import: './src/shared/Button.tsx'
      }
    },
    remotes:{
      'vite-react': 'vite-react@http://localhost:5173/remoteEntry.js',
    },
    shared: ['react', 'react-dom']
  })],
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        format: 'esm',
        entryFileNames: 'assets/[name].js',
        minifyInternalExports: false,
      },
    },
  },
})


