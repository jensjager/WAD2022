import { createStore } from 'vuex'

export default createStore({
  state: {
    userId: null
  },
  getters: {
    getUserId: state => {
      console.log('Retrieving user id')
      return state.userId;
    }
  },
  mutations: {
    setUserId(state, userId) {
      state.userId = userId;
    }
  },
  actions: {
    setUserIdAction: (action, userId) => {
      console.log("Storing the User ID")
      action.commit("setUserId", userId)
    }
  },
  modules: {
  }
})
