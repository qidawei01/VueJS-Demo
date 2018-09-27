import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/About.vue';
import Test1 from './views/Test1.vue';
import Test2 from './views/Test2.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/Test1',
      name: 'Test1',
      component: Test1,
    },
    {
      path: '/Test2',
      name: 'Test2',
      component: Test2,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
  ],
});
