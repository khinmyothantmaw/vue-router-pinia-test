import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import PersonDetail from "../views/PersonDetail.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/person/:id",
    name: "person-detail",
    component: PersonDetail,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
