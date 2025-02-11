import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 5173
  },
  plugins: [react(), federation({
    name: 'vite-react',
    filename: 'remoteEntry.js',
    exposes: {
      './Button': {
        name: 'Button',
        import: './src/shared/Button.tsx'
      }
    },
    remotes: {
      'vite-react-2': 'vite-react-2@http://localhost:5174/remoteEntry.js',
    },
    // remotes: {
    //   'webpack-side': {
    //     external: 'http://localhost:5001/remoteEntry.js',
    //     format: 'esm',
    //     from: 'webpack',
    //   },
    // },
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


