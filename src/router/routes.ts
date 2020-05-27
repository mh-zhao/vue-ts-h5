import{ RouteConfig } from "vue-router";

const routes: Array<RouteConfig> = [
  {
    path: "/login",
    name: "login",
    meta: {
      title: '登录'
    },
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/login/index.vue")
  }
];

export default routes;