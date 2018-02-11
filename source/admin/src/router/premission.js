import { router } from './index'
import { getToken } from '@/utils/auth'
import store from '@/store'

// premissions
// 简单昨个登录的验证
// 这里后面需要挂权限,生成权限路由表
router.beforeEach((to, from, next) => {
  if (getToken()) {
    if (to.path === '/login') {
      next('/')
    } else {
      // 跳转路由需要权限
      if (to.meta && to.meta.role) {
        // 没有权限列表
        if (!store.state.user.role) {
        // 获取权限列表
          store.dispatch('getUserInfo').then(res => {
          // 根据获取到的用户权限来构建动态路由表,或者做其他事情;
          // router.generateRotesWithRole();
            // next
            // next({ ...to, replace: true })
            next()
          })
        } else {
          //
          next()
        }
      // 跳转路由不需要权限
      } else {
        // 没有权限列表
        if (!store.state.user.role) {
          // 获取权限列表
          store.dispatch('getUserInfo').then(res => {
            // 根据获取到的用户权限来构建动态路由表,或者做其他事情;
            console.log(res)
            // router.generateRotesWithRole();
            // next
            // next({ ...to, replace: true })
            next()
          })
        } else {
          // 有权限列表
          next()
        }
      }
    }
  } else {
    if (to.path !== '/login') {
      next('/login')
    } else {
      next()
    }
  }
})
