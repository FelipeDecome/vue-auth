import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/users/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Login,
  },

  {
    path: "/entrar",
    name: "Entrar",
    component: Login,
  },

  {
    path: "/hello",
    name: "Hello",
    component: Login,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
