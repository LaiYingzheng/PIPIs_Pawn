import HOMEPAGE from "@/components/HOME";
import audiotag from "@/components/audiotagging";
import lyft from "@/components/lyft";
import amazonspider from "@/components/amazon_spider";
import Pre from "@/components/preview";
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const routes = [
    {path: '/', name:'home', component: HOMEPAGE,meta: { title: 'Yingzheng lai' } },
    {path: '/audiotag', name: 'project',component:audiotag},
    {path: '/lyft', name: 'project',component:lyft},
    {path: '/amazonspider', name: 'project',component:amazonspider},
    {path: '/pre', name: 'project',component:Pre},
]

const router = new Router({
    mode:'history',
    baseUrl: '',
    routes,
})

export default router;