// vite.chrome.config.ts
import { defineConfig } from "file:///run/media/anandukch/DATA/Anandu/arena/projects/TextGlimpse/node_modules/vite/dist/node/index.js";
import react from "file:///run/media/anandukch/DATA/Anandu/arena/projects/TextGlimpse/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { resolve } from "path";
var __vite_injected_original_dirname = "/run/media/anandukch/DATA/Anandu/arena/projects/TextGlimpse";
var fetchVersion = () => {
  return {
    name: "html-transform",
    transformIndexHtml(html) {
      return html.replace(/__APP_VERSION__/, `v${process.env.npm_package_version}`);
    }
  };
};
var vite_chrome_config_default = defineConfig({
  plugins: [react(), fetchVersion()],
  build: {
    emptyOutDir: false,
    outDir: resolve(__vite_injected_original_dirname, "dist"),
    lib: {
      formats: ["iife"],
      entry: resolve(__vite_injected_original_dirname, "/src/service-worker/background.ts"),
      name: "service worker"
    },
    rollupOptions: {
      output: {
        entryFileNames: "background.global.js",
        extend: true
      }
    }
  }
});
export {
  vite_chrome_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jaHJvbWUuY29uZmlnLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL3J1bi9tZWRpYS9hbmFuZHVrY2gvREFUQS9BbmFuZHUvYXJlbmEvcHJvamVjdHMvVGV4dEdsaW1wc2VcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ydW4vbWVkaWEvYW5hbmR1a2NoL0RBVEEvQW5hbmR1L2FyZW5hL3Byb2plY3RzL1RleHRHbGltcHNlL3ZpdGUuY2hyb21lLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vcnVuL21lZGlhL2FuYW5kdWtjaC9EQVRBL0FuYW5kdS9hcmVuYS9wcm9qZWN0cy9UZXh0R2xpbXBzZS92aXRlLmNocm9tZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gXCJwYXRoXCI7XG5cbmNvbnN0IGZldGNoVmVyc2lvbiA9ICgpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBuYW1lOiBcImh0bWwtdHJhbnNmb3JtXCIsXG4gICAgICAgIHRyYW5zZm9ybUluZGV4SHRtbChodG1sOiBzdHJpbmcpIHtcbiAgICAgICAgICAgIHJldHVybiBodG1sLnJlcGxhY2UoL19fQVBQX1ZFUlNJT05fXy8sIGB2JHtwcm9jZXNzLmVudi5ucG1fcGFja2FnZV92ZXJzaW9ufWApO1xuICAgICAgICB9LFxuICAgIH07XG59O1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgICBwbHVnaW5zOiBbcmVhY3QoKSwgZmV0Y2hWZXJzaW9uKCldLFxuICAgIGJ1aWxkOiB7XG4gICAgICAgIGVtcHR5T3V0RGlyOiBmYWxzZSxcbiAgICAgICAgb3V0RGlyOiByZXNvbHZlKF9fZGlybmFtZSwgXCJkaXN0XCIpLFxuICAgICAgICBsaWI6IHtcbiAgICAgICAgICAgIGZvcm1hdHM6IFtcImlpZmVcIl0sXG4gICAgICAgICAgICBlbnRyeTogcmVzb2x2ZShfX2Rpcm5hbWUsIFwiL3NyYy9zZXJ2aWNlLXdvcmtlci9iYWNrZ3JvdW5kLnRzXCIpLFxuICAgICAgICAgICAgbmFtZTogXCJzZXJ2aWNlIHdvcmtlclwiLFxuICAgICAgICB9LFxuICAgICAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICAgICAgICBvdXRwdXQ6IHtcbiAgICAgICAgICAgICAgICBlbnRyeUZpbGVOYW1lczogXCJiYWNrZ3JvdW5kLmdsb2JhbC5qc1wiLFxuICAgICAgICAgICAgICAgIGV4dGVuZDogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFpWCxTQUFTLG9CQUFvQjtBQUM5WSxPQUFPLFdBQVc7QUFDbEIsU0FBUyxlQUFlO0FBRnhCLElBQU0sbUNBQW1DO0FBSXpDLElBQU0sZUFBZSxNQUFNO0FBQ3ZCLFNBQU87QUFBQSxJQUNILE1BQU07QUFBQSxJQUNOLG1CQUFtQixNQUFjO0FBQzdCLGFBQU8sS0FBSyxRQUFRLG1CQUFtQixJQUFJLFFBQVEsSUFBSSxtQkFBbUIsRUFBRTtBQUFBLElBQ2hGO0FBQUEsRUFDSjtBQUNKO0FBR0EsSUFBTyw2QkFBUSxhQUFhO0FBQUEsRUFDeEIsU0FBUyxDQUFDLE1BQU0sR0FBRyxhQUFhLENBQUM7QUFBQSxFQUNqQyxPQUFPO0FBQUEsSUFDSCxhQUFhO0FBQUEsSUFDYixRQUFRLFFBQVEsa0NBQVcsTUFBTTtBQUFBLElBQ2pDLEtBQUs7QUFBQSxNQUNELFNBQVMsQ0FBQyxNQUFNO0FBQUEsTUFDaEIsT0FBTyxRQUFRLGtDQUFXLG1DQUFtQztBQUFBLE1BQzdELE1BQU07QUFBQSxJQUNWO0FBQUEsSUFDQSxlQUFlO0FBQUEsTUFDWCxRQUFRO0FBQUEsUUFDSixnQkFBZ0I7QUFBQSxRQUNoQixRQUFRO0FBQUEsTUFDWjtBQUFBLElBQ0o7QUFBQSxFQUNKO0FBQ0osQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
