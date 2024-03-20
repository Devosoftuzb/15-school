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
        },
        {
          path:'/yangilik',
          name:'yangilik',
          component: () => import("../views/New/New.vue"),
        },
        {
          path:'/lessons',
          name:'lessons',
          component: () => import("../views/Lessons/Lesson.vue"),
        },
        {
          path:'/contact',
          name:'contact',
          component: () => import("../views/Contact/Contact.vue"),
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
