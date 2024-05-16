// vite.config.ts
import { defineConfig } from "file:///run/media/anandukch/DATA/Anandu/arena/projects/TextGlimpse/node_modules/vite/dist/node/index.js";
import react from "file:///run/media/anandukch/DATA/Anandu/arena/projects/TextGlimpse/node_modules/@vitejs/plugin-react/dist/index.mjs";
var __vite_injected_original_import_meta_url = "file:///run/media/anandukch/DATA/Anandu/arena/projects/TextGlimpse/vite.config.ts";
var vite_config_default = defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    emptyOutDir: false,
    rollupOptions: {
      input: {
        index: new URL("./index.html", __vite_injected_original_import_meta_url).pathname,
        background: new URL("./src/service-worker/background.html", __vite_injected_original_import_meta_url).pathname
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvcnVuL21lZGlhL2FuYW5kdWtjaC9EQVRBL0FuYW5kdS9hcmVuYS9wcm9qZWN0cy9UZXh0R2xpbXBzZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL3J1bi9tZWRpYS9hbmFuZHVrY2gvREFUQS9BbmFuZHUvYXJlbmEvcHJvamVjdHMvVGV4dEdsaW1wc2Uvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL3J1bi9tZWRpYS9hbmFuZHVrY2gvREFUQS9BbmFuZHUvYXJlbmEvcHJvamVjdHMvVGV4dEdsaW1wc2Uvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgICBwbHVnaW5zOiBbcmVhY3QoKV0sXG4gICAgYnVpbGQ6IHtcbiAgICAgICAgb3V0RGlyOiBcImRpc3RcIixcbiAgICAgICAgZW1wdHlPdXREaXI6IGZhbHNlLFxuICAgICAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICAgICAgICBpbnB1dDoge1xuICAgICAgICAgICAgICAgIGluZGV4OiBuZXcgVVJMKFwiLi9pbmRleC5odG1sXCIsIGltcG9ydC5tZXRhLnVybCkucGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbmV3IFVSTChcIi4vc3JjL3NlcnZpY2Utd29ya2VyL2JhY2tncm91bmQuaHRtbFwiLCBpbXBvcnQubWV0YS51cmwpLnBhdGhuYW1lLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQW1XLFNBQVMsb0JBQW9CO0FBQ2hZLE9BQU8sV0FBVztBQUQ0TSxJQUFNLDJDQUEyQztBQUkvUSxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUN4QixTQUFTLENBQUMsTUFBTSxDQUFDO0FBQUEsRUFDakIsT0FBTztBQUFBLElBQ0gsUUFBUTtBQUFBLElBQ1IsYUFBYTtBQUFBLElBQ2IsZUFBZTtBQUFBLE1BQ1gsT0FBTztBQUFBLFFBQ0gsT0FBTyxJQUFJLElBQUksZ0JBQWdCLHdDQUFlLEVBQUU7QUFBQSxRQUNoRCxZQUFZLElBQUksSUFBSSx3Q0FBd0Msd0NBQWUsRUFBRTtBQUFBLE1BQ2pGO0FBQUEsSUFDSjtBQUFBLEVBQ0o7QUFDSixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=