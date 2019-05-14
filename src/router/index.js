import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import FirstYear from '@/views/FirstYear'
import SecondYear from '@/views/SecondYear'
import ThirdYear from '@/views/ThirdYear'
import ForthYear from '@/views/ForthYear'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/first_year',
      name: 'FirstYear',
      component: FirstYear
    },
    {
      path: '/second_year',
      name: 'SecondYear',
      component: SecondYear
    },
    {
      path: '/third_year',
      name: 'ThirdYear',
      component: ThirdYear
    },
    {
      path: '/forth_year',
      name: 'ForthYear',
      component: ForthYear
    }
  ]
})
