import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/workshop",
    name: "Workshops",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/workshop/ViewWorkshops"),
    meta: { requiresAuth: true },
  },
  {
    path: "/download",
    name: "Downloads",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Download"),
    meta: { requiresAuth: true },
  },
  {
    path: "/workshopUser/:workshopId/:workshopTitle",
    name: "WorkshopUser",
    component: () => import("../views/workshop/WorkShopUser.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const store = require("../store").default;
  if (!store.getters.isAuthenticated) {
    //Try to get from localstorage
    store.dispatch("init");
  }
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!store.getters.isAuthenticated) {
      next({
        path: "/",
        query: {
          redirect: to.fullPath,
        },
      });
    } else {
      next();
    }
  } else {
    //Redirect to dashboard if user is already logged in and trying to access Login page
    console.log(store.getters.isAuthenticated);
    if (store.getters.isAuthenticated && to.name === "Login") {
      next("/workshop");
    } else {
      next();
    }
  }
});

export default router;
