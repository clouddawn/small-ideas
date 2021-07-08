import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';
import Yangyu from '@/views/Yangyu.vue';
import Shaozhuang from '@/views/Shaozhuang.vue';
import Anning from '@/views/Anning.vue';
import Liwei from '@/views/Liwei.vue';
import Xingdongdong from '@/views/Xingdongdong.vue';
import Zhaoning from '@/views/Zhaoning.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    {
        path:'/',
        redirect:'/yangyu'
    },
    {
        path:'/yangyu',
        component:Yangyu
    },
    {
        path:'/shaozhuang',
        component:Shaozhuang
    },
    {
        path:'/anning',
        component:Anning
    },
    {
        path:'/liwei',
        component:Liwei
    },
    {
        path:'/xingdongdong',
        component:Xingdongdong
    },
    {
        path:'/zhaoning',
        component:Zhaoning
    }
];

const router = new VueRouter({
    routes
});

export default router;
