import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import * as filters from "./utils/filters"

Vue.config.productionTip = false;

import 'amfe-flexible'
//注册全局过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});
//解决移动端300ms延迟
import FastClick from 'fastclick'
import './assets/js/fastClick'
FastClick.attach(document.body);

import { Button } from 'vant';
Vue.use(Button);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
