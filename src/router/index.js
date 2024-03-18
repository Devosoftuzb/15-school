import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children:[
        {
          path:'/',
          name:'home',
          component: () => import("../views/Home/Home.vue"),
        },
        {
          path:'/teacher',
          name:'teacher',
          component: () => import("../views/Teacher/Teacher.vue"),
        }
      ]
    },
    {
      path: "/:pathMatch(.*)*",
      name: "error",
      component: () => import("../views/Error/Error.vue"),
    },
    // {
    //   path: "/teacher",
    //   name: "teacher",
    //   component: () => import("../views/Teacher/Teacher.vue"),
    // },
  ]
})

export default router
