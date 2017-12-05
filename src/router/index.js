import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import demo from '@/components/demo'
import hooked from '@/components/hooked'
import hookedTopic from '@/components/hooked-topic'

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
        }
    ]
})