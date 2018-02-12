import { constantRouterMap } from '@/router/routes/staticRoutes'
import { aysncRoutesMap } from '@/router/routes/aysncRoutes'
const asyncRouter = {
  //
  state: {
    addRouters: null, // 动态添加的路由表
    router: constantRouterMap // 静态路由表或和动态路由表合并后的总路由表
  },

  mutations: {
    SET_ROUTERS: (state, router) => {
      state.addRouters = router
      state.router = constantRouterMap.concat(router)
    }
  },

  actions: {
    generateRouters: ({commit}, role) => {
      return new Promise((resolve, reject) => {
        // TODO 这里需要通过权限来过滤出该权限所拥有的动态路由表,然后再SET_ROUTERS
        commit('SET_ROUTERS', aysncRoutesMap)
        resolve()
      })
    }
  }

}

export default asyncRouter
