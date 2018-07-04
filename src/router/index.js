import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Footer from '@/components/Footer'
// import Header from '@/components/Header'
const Header = () => import(/* webpackChunkName: "group-foo" */"../components/Header.vue"); // 路由懒加载 1
// import hooked from '@/components/hooked'
const hooked = r => require.ensure([], () => r(require('../components/hooked.vue')), 'hooked') // 路由懒加载 2
import hookedTopic from '@/components/hooked-topic'
import vueWatch from '@/components/vueAPI/watch'
import Footer1 from '@/components/Footer'


Vue.use(Router)

const router = new Router({
  mode: 'history',
  scrollBehavior(to, from, savedPosition){
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [{
      path: '/',
      name: 'Hello',
      // redirect:'/footer',//重定向
      component: Hello
    },
    {
      path: '/footer',
      name: 'Footer',
      component: Footer,
      beforeEnter:(to,from,next)=>{
        console.log('我进入Footer了')
        console.log(to);
        console.log(from);
        next();//不执行next 不展示页面
        //to:路由将要跳转的路径信息，信息是包含在对像里边的。
        //from:路径跳转前的路径信息，也是一个对象的形式。
        //next:路由的控制参数，常用的有next(true)和next(false)。
      }
    },
    {
      path: '/header',
      name: 'Header',
      component: Header,
      children: [
        {
          path: '/header/:newsId/:newsTitle',
          component:Footer1,
          name:'haha'
        }
      ],
      
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
  ],
  scrollBehavior (to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    // return { x: 0, y: 0 }
  }
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
