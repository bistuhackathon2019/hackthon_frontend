import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import './plugins/element.js'

import HelloWord from './components/HelloWorld'
import Login from './components/Login'

Vue.config.productionTip = false;
Vue.use(VueRouter);
const routers = new VueRouter({
  routes: [
    { path: '/', component: HelloWord },
    { path: '/login', component: Login }
  ]
});

new Vue({
  render: h => h(App),
  router: routers
}).$mount('#app');
