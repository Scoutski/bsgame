import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';

Vue.use(VueRouter);
const routes = [];

const router = new VueRouter({
  routes,
  mode: 'history',
});

const vm = new Vue({
  el: '#app',
  render: createEle => createEle(App),
  router,
});

export default vm;
