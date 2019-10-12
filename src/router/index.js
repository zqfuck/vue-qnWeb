import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

import Index from '@/components/Index'
import PriductService from '@/components/PriductService'
import Solution from '@/components/Solution'
import NewsInform from '@/components/NewsInform'
import AboutUs from '@/components/AboutUs'
import JoinYouth from '@/components/JoinYouth'
import QingYun from '@/components/QingYun'
import QingniuAI from '@/components/QingniuAI'
import QingniuVideo from '@/components/QingniuVideo'
import OnJob from '@/components/OnJob'
import Scene from '@/components/Scene'
import NewDetail from '@/components/NewDetail'







Vue.use(Router)

export default new Router({
  //mode:'history',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
       return savedPosition
    }
    return {x: 0, y: 0}
  },
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },{
      path: '/PriductService',
      name: 'PriductService',
      component: PriductService
    },{
      path:'/Solution',
      name:'Solution',
      component:Solution
    },{
      path:'/NewsInform',
      name:'NewsInform',
      component:NewsInform
    },{
      path:'/AboutUs',
      name:'AboutUs',
      component:AboutUs
    },{
      path:'/JoinYouth',
      name:'JoinYouth',
      component:JoinYouth
    },{
      path:'/QingYun',
      name:'QingYun',
      component:QingYun
    },{
      path:'/QingniuAI',
      name:'QingniuAI',
      component:QingniuAI
    },{
      path:'/QingniuVideo',
      name:'QingniuVideo',
      component:QingniuVideo
    },{
      path:'/OnJob',
      name:'OnJob',
      component:OnJob
    },{
      path:'/Scene',
      name:'Scene',
      component:Scene
    },{
      path:'/NewDetail/:c_id',
      name:'NewDetail',
      component:NewDetail
    }
  ]
})
