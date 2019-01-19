import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/BottomNav/Home/Home.vue'
import Work from './components/BottomNav/Work/Work.vue'
import Messages from './components/BottomNav/Messages/Messages.vue'
import Account from './components/BottomNav/Account/Account.vue'
import Job from './components/views/Job/Job.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/work',
      name: 'work',
      component: Work
    },
    {
      path: '/messages',
      name: 'messages',
      component: Messages
    },
    {
      path: '/account',
      name: 'account',
      component: Account
    },
    {
      path: '/job',
      name: 'job',
      component: Job
    },
  ]
})
