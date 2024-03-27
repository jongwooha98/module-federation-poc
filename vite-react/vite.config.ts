import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), federation({
    name: 'vite-react',
    filename: 'remoteEntry.js',
    exposes: {
      './Button': {
        name: 'Button',
        import: './src/shared/Button.tsx'
      }
    },
    // remotes:{
    //     foo: 'remote_foo'
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


