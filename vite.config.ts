import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

import path from "node:path";
import { packageDirectorySync } from "pkg-dir";

const packageRoot = packageDirectorySync();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      src: path.resolve(packageRoot, "./src"),
    },
  },
  base: "/think-main/",
});
