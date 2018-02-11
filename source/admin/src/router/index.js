import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 异步加载与打包components
const _import_ = file => () => import('@/views/' + file + '.vue')

/*
 * 静态异步加载路由,
 * 全局,也就是全权限都会拥有的路由表
 */
export const constantRouterMap = [
  {
    path: '/login',
    component: _import_('Login/index')
  },
  {
    path: '/',
    component: _import_('Home/index'),
    redirect: '/dash',
    children: [
      { path: '/dash', component: _import_('Dashboard/index') }
    ]
  },
  { path: '*', component: _import_('others/404'), hidden: true }
]

/**
 * 权限路由表
 */
export const aysncRouterMap = [
  // {
  //   path: '/manage',
  //   meta: { role: ['admin'] }
  // }
]

export const router = new Router({
  routes: constantRouterMap
})
