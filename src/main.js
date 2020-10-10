import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import EasyPreview from "easy-preview";
import VueHtml2Canvas from 'vue-html2canvas';
import HOMEPAGE from "@/components/HOME.vue";
import audiotag from "@/components/audiotagging.vue";
import lyft from "@/components/lyft.vue";
import Pre from "@/components/preview.vue";
import amazonspider from "@/components/amazon_spider.vue"

Vue.use(VueHtml2Canvas);
Vue.use(VueRouter);
Vue.use(EasyPreview);
Vue.config.productionTip = false

const router = new VueRouter({
    mode: 'history',
    fallback: true,
    routes: [
        {path: '/', name:'home', component: HOMEPAGE,meta: { title: 'Yingzheng lai' } },
        {path: '/audiotag', name: 'project',component:audiotag},
        {path: '/lyft', name: 'project',component:lyft},
        {path: '/amazonspider', name: 'project',component:amazonspider},
        {path: '/pre', name: 'project',component:Pre},
    ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
