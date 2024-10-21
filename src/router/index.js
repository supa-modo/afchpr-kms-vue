import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "@/views/LoginPage.vue";
import Dashboard from "@/views/HomePage.vue";

const routes = [
  {
    path: "/",
    name: "LoginPage",
    component: LoginPage,
  },
  {
    path: "/home",
    name: "HomePage",
    component: Dashboard,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
