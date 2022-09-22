const user = {
  state: {
    userInfo: {}
  },
  mutations: {
    SET_USERINFO (state, payload) {
      state.userInfo = payload
    }
  }
}
export default user
