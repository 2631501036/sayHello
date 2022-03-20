import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      account: '' || localStorage.account,
      user_name: '' || localStorage.user_name,
      avator_url: '' || localStorage.avator_url,
      active:false  //用户状态是否活跃
  },
  mutations: {
    //   修改/存 用户名，账号， 头像
      setUserName (state, res) {
        state.account = res.account
        state.user_name = res.username
        state.avator_url = res.avatorurl

        localStorage.account = res.account
        localStorage.user_name = res.username
        localStorage.avator_url = res.avatorurl
      },
    //   修改用户状态
      setUserActive(state, bool) {
        state.active = bool
        localStorage.active = bool
      }
  },
  getters: {
    getUserName (state) {
        return state.user_name
    },
    getAccount (state) {
        return state.account
    },
    getAvator (state) {
        return state.avator_url
    }
  },
  actions: {
  },
  modules: {
  }
})
