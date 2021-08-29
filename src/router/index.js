import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/users/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Login,
    meta: {
      private: true,
    },
  },

  {
    path: "/entrar",
    name: "Entrar",
    component: Login,
    meta: {
      usersNotAllowed: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.private)) {
    next({
      path: "/entrar",
    });
  } else next();
});

export default router;
