import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

import Index from '@/components/Index'
import Solution from '@/components/Solution'
import NewsInform from '@/components/NewsInform'
import AboutUs from '@/components/AboutUs'
import JoinYouth from '@/components/JoinYouth'
import QingYun from '@/components/QingYun'
import QingniuAI from '@/components/QingniuAI'
import BigData from '@/components/BigData'
import OnJob from '@/components/OnJob'
import Scene from '@/components/Scene'
import NewDetail from '@/components/NewDetail'


Vue.use(Router)

export default new Router({
    //mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        }
        return { x: 0, y: 0 }
    },
    routes: [{
        path: '/',
        name: 'Index',
        component: Index,
        meta: {
            title: '青牛软件 | 中国领先的企业云服务提供商' // 标题设置
        }
    }, {
        path: '/Solution',
        name: 'Solution',
        component: Solution
    }, {
        path: '/NewsInform',
        name: 'NewsInform',
        component: NewsInform,
        meta: {
            title: '青牛软件 | 新闻动态'
        }
    }, {
        path: '/AboutUs',
        name: 'AboutUs',
        component: AboutUs,
        meta: {
            title: '青牛软件 | 关于我们'
        }
    }, {
        path: '/JoinYouth',
        name: 'JoinYouth',
        component: JoinYouth,
        meta: {
            title: '青牛软件 | 加入我们'
        }
    }, {
        path: '/QingYun',
        name: 'QingYun',
        component: QingYun,
        meta: {
            title: '青牛软件 | 联络云'
        }
    }, {
        path: '/QingniuAI',
        name: 'QingniuAI',
        component: QingniuAI,
        meta: {
            title: '青牛软件 | AI服务'
        }
    }, {
        path: '/BigData',
        name: 'BigData',
        component: BigData,
        meta: {
            title: '青牛软件 | 大数据技术'
        }
    }, {
        path: '/OnJob',
        name: 'OnJob',
        component: OnJob,
        meta: {
            title: '青牛软件 | 在招职位'
        }
    }, {
        path: '/Scene',
        name: 'Scene',
        component: Scene,
        meta: {
            title: '青牛软件 | 解决方案'
        }
    }, {
        path: '/NewDetail/:c_id',
        name: 'NewDetail',
        component: NewDetail,
        meta: {
            title: '青牛软件 | 新闻详情'
        }
    }]
})