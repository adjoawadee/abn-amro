import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
