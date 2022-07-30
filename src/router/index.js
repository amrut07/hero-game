import { createWebHistory, createRouter } from "vue-router";
import HeadTemplate from "@/views/HeadTemplate.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HeadTemplate,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
