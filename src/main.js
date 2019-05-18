import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import './plugins/element.js'
import axios from 'axios'
import VueAxios from 'vue-axios'

import HelloWord from './components/HelloWorld'
import Login from './components/Login'
import Home from './components/Home'




Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(VueAxios,axios);
const routers = new VueRouter({
  routes: [
    { path: '/', component: HelloWord},
    { path: '/login', component: Login},
    { path: '/home', component: Home}
  ]
});

new Vue({
  render: h => h(App),
  router: routers
}).$mount('#app');
