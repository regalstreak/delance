import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ui: {
      submitProposalDialog: false
    }
  },
  mutations: {
    changeSubmitProposalDialog(state, n) {
      state.ui.submitProposalDialog = n;
    }
  },
  actions: {

  }
})
