import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import a1 from '@/components/a1'
import a2 from '@/components/a2'
import shouye from '@/page/shouye'
import zhuce from '@/components/zhuce'
import denglu from '@/components/denglu'
import jiajian from '@/components/jiajian'

Vue.use(Router)

var router = new Router({
  // mode:"history",
  linkExactActiveClass:"nav",
  routes: [
    {
      path: '/',
      redirect: '/zhuce'
    },
    {
      path:'/zhuce',
      name:'zhuce',
      component: zhuce
    },
    {
      path:'/jiajian',
      name:'jiajian',
      component: jiajian
    },
    {
      path:'/denglu',
      name:'denglu',
      component: denglu
    },
    {
      path:'/shouye',
      name:'shouye',
      component: shouye
    },
    {
      path:'/a1',
      name:'a1',
      component: a1
    },
    {
      path:'/a2/:id',
      name:'a2',
      component: a2
    }
  ]
})
export default router