import Vue from "vue";
import VueRouter from "vue-router";
import routes from './routes'
import { getToken } from '@/utils/auth';

Vue.use(VueRouter);

const router = new VueRouter({
  // mode: "history",
  base: process.env.BASE_URL,
  routes
});

//路由白名单
const whiteRoute = ['/login'];

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  if (getToken()) {
    if (to.path === '/login') {
      next({path: '/home'})
    } else {
      next();
    }
  } else {
    if (whiteRoute.indexOf(to.path) !== -1) {
      next()
    } else {
      next({path: '/login'})
    }
  }
})

export default router;
