/*jshint esversion: 8 */

import Vue from "vue";
import VueRouter from "vue-router";
import admin from "../views/admin/dashboard";
import overview from "../components/admin/overview";
import login from "../views/login";
// import jwt_decode from 'jwt-decode';
Vue.use(VueRouter);

// const a = false;

const routes = [
  {
    path: "/",
    name: "admin",
    component: admin,
    meta: { requiresAuth: true },
    children: [
      {
        path: "",
        name: "",
        component: overview,
      },
    ],
  },
  {
    path: "/login",
    name: login,
    component: login,
    meta: {
      isAuth: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (
      localStorage.getItem("token") == null ||
      JSON.parse(localStorage.getItem("parsedToken")).role != "admin"
    ) {
      next({
        path: "/login",
        query: { redirect: to.fullPath },
      });
    } else {
      next();
    }
  } else {
    next();
  }
});
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.isAuth)) {
    if (localStorage.getItem("token") != null) {
      next({
        path: "/",
        query: { redirect: to.fullPath },
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
