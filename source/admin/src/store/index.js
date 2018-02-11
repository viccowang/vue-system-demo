import Vue from 'vue'
import Vuex from 'vuex'
// custom store
import user from './modules/user'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user
  },
  getters
})
