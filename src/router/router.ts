import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import InfoView from "../views/InfoView.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/shows/:id",
    name: "InfoView",
    component: InfoView,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
