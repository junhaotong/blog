// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// import axios
import axios from 'axios';
import VueAxios from 'vue-axios';

//import iview
import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.config.productionTip = false

Vue.use(VueAxios, axios);
Vue.use(iView);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
