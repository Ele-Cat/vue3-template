import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Apps",
      component: () => import("@/views/Apps.vue"),
    },
    {
      path: "/image-editor",
      name: "ImageEditor",
      component: () => import("@/views/ImageEditor.vue"),
    },
    {
      path: "/markdown-editor",
      name: "MarkdownEditor",
      component: () => import("@/views/MarkdownEditor.vue"),
    },
    {
      path: "/contribution",
      name: "Contribution",
      component: () => import("@/views/Contribution.vue"),
    },
    {
      // 添加通配符路由
      path: "/:pathMatch(.*)*",
      component: () => import("@/views/App.vue"),
    },
  ],
});

export default router;
