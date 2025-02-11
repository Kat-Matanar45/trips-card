import Vue from 'vue';
import App from './App.vue';

import router from './router/index.js';
import store from './store';

import '@/assets/css/style.css';
import '@/assets/css/bootstrap.css';

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
