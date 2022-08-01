import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import Home from "@/layout/LayoutHome.vue"
import Film from "@/layout/LayoutFilm.vue"

const routes: Array<RouteRecordRaw> = [

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

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
