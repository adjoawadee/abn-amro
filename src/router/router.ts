import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import InfoView from "../views/InfoView.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/show",
    name: "Show",
    component: InfoView,
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
