import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      children: [
        {
          path: "/",
          name: "home",
          component: () => import("../views/Home/Home.vue"),
        },
        {
          path: "/teacher",
          name: "teacher",
          component: () => import("../views/Teacher/Teacher.vue"),
        },
        {
          path: "/yangilik",
          name: "yangilik",
          component: () => import("../views/New/New.vue"),
        },
        {
          path: "/lessons",
          name: "lessons",
          component: () => import("../views/Lessons/Lesson.vue"),
        },
        {
          path: "/contact",
          name: "contact",
          component: () => import("../views/Contact/Contact.vue"),
        },
      ],
    },
    {
      path: "/admin",
      name: "admin",
      component: () => import("../admin/Home/Home.vue"),
    },
    {
      path: "/ustozlar",
      name: "ustozlar",
      component: () => import("../admin/Ustozlar/Ustozlar.vue"),
    },
    {
      path: "/yangiliklar",
      name: "yangiliklar",
      component: () => import("../admin/Yangiliklar/Yangiliklar.vue"),
    },
    {
      path: "/hamkorlar",
      name: "hamkorlar",
      component: () => import("../admin/Hamkorlar/Hamkorlar.vue"),
    },
    {
      path: "/togaraklar",
      name: "togaraklar",
      component: () => import("../admin/Togaraklar/Togaraklar.vue"),
    },
    {
      path: "/habarlar",
      name: "habarlar",
      component: () => import("../admin/Habarlar/Habarlar.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../admin/Login/Login.vue"),
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
  ],
});

router.beforeEach((to, from, next) => {
  let token = localStorage.getItem("token");

  if (
    (to.name == "admin" ||
      to.name == "ustozlar" ||
      to.name == "yangiliklar" ||
      to.name == "hamkorlar" ||
      to.name == "togaraklar" ||
      to.name == "habarlar") &&
    to.name !== "login" &&
    !token
  ) {
    next({ name: "login" });
  } else {
    next();
  }
});

export default router;
