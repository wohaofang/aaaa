import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import hooked from '@/components/hooked'
import hookedTopic from '@/components/hooked-topic'
import vueWatch from '@/components/vueAPI/watch'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/footer',
      name: 'Footer',
      component: Footer
    },
    {
      path: '/header',
      name: 'Header',
      component: Header
    },
    {
      path: '/hooked',
      name: 'hooked',
      component: hooked
    },
    {
      path: '/hookedTopic',
      name: 'hookedTopic',
      component: hookedTopic
    },
    {
      path: '/vueAPI/watch',
      // name: 'vueWatch',
      component: vueWatch
    }
  ]
})