import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import EasyPreview from "easy-preview";
import VueHtml2Canvas from 'vue-html2canvas';
import HOMEPAGE from "@/components/HOME.vue";
import VIDEOTAG from "@/components/Project.vue";
import Pre from "@/components/preview.vue";

Vue.use(VueHtml2Canvas);
Vue.use(VueRouter);
Vue.use(EasyPreview);
Vue.config.productionTip = false

const router = new VueRouter({
    routes: [

        {path: '/', name:'home', component: HOMEPAGE,meta: { title: 'Yingzheng lai' } },
        {path: '/audiotag', name: 'project',component:VIDEOTAG},
        {path: '/pre', name: 'project',component:Pre},
    ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
