import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import EasyPreview from "easy-preview";
import VueHtml2Canvas from 'vue-html2canvas';

Vue.use(VueHtml2Canvas);
Vue.use(EasyPreview);
Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
