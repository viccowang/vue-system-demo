import {constantRouterMap} from '@/router'
const asyncRouter = {
  //
  state: {
    router: constantRouterMap
  },

  mutations: {
    SET_ROUTERS: (state, router) => {
      state.router = constantRouterMap.concat(router)
    }
  },

  actions: {
    generateRouters: () => {

    }
  }

}

export default asyncRouter
