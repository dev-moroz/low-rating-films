import { createRouter, createWebHistory } from "vue-router";
import Home from "@/layout/LayoutHome"
import Film from "@/layout/LayoutFilm"

const routes = [
  {
    name: "film",
    path: "/film/:id",
    component: Film,
  },
  {
    name: "home",
    path: "/",
    component: Home,
  },
]

export default createRouter({
  routes,
  history: createWebHistory(),
});
