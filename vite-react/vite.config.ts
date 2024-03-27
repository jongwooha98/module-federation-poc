import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), federation({
    name: 'vite-react',
    filename: 'remoteEntry.js',
    exposes: {
      './Button': './src/shared/Button.tsx',
    },
    // remotes:{
    //     foo: 'remote_foo'
    // },
    shared: ['react', 'react-dom']
  })],
})


