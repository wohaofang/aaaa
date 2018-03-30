import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import hooked from '@/components/hooked'
import hookedTopic from '@/components/hooked-topic'
import vueWatch from '@/components/vueAPI/watch'
import Footer1 from '@/components/Footer'


Vue.use(Router)

const router = new Router({
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
      component: Header,
      children: [
        {
          path: '/header/haha',
          component:Footer1
        }
      ]
    },
    {
      path: '/hooked',
      name: 'hooked',
      component: hooked
    },
    {
      path: '/hookedTopic',
      name: 'hookedTopic',
      component: hookedTopic,
      
    },
    {
      path: '/vueAPI/watch',
      // name: 'vueWatch',
      component: vueWatch
    }
  ]
})

// 全局路由守卫
router.beforeEach((to, from, next) => {
  console.log('navigation-guards');
  console.log(to, from, next);

  // to: Route: 即将要进入的目标 路由对象
  // from: Route: 当前导航正要离开的路由
  // next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。

  const nextRoute = ['home', 'good-list', 'good-detail', 'cart', 'profile'];
  let isLogin = global.isLogin;  // 是否登录
  // 未登录状态；当路由到nextRoute指定页时，跳转至login
  if (nextRoute.indexOf(to.name) >= 0) {  
    if (!isLogin) {
      console.log('what fuck');
      router.push({ name: 'login' })
    }
  }
  // 已登录状态；当路由到login时，跳转至home 
  if (to.name === 'login') {
    if (isLogin) {
      router.push({ name: 'home' });
    }
  }
  next();
});

export default router;
