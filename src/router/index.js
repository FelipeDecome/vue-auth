import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/users/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Entrar",
    component: Login,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
