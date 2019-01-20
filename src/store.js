import Vue from 'vue'
import Vuex from 'vuex'
import { firebaseAction } from 'vuexfire'

Vue.use(Vuex)

import { firebaseMutations } from 'vuexfire'

export default new Vuex.Store({
  state: {
    ui: {
      submitProposalDialog: false
    },
    login: {
      web3: null,
      account: "",
      contract: null
    },
    importantInfo: {
      contractAddress: "",
      isFreelancer: false,
      isEmployer: false
    },
    employers: "",
    freelancers: "",
    accountInfo: "",

    newJob: null,
    jobs: {}

  },
  mutations: {
    ...firebaseMutations,
    changeSubmitProposalDialog(state, n) {
      state.ui.submitProposalDialog = n;
    },
    addLoginInfo(state, n) {
      state.login.web3 = n.web3L;
      state.login.account = n.accountL;
      state.login.contract = n.contractL;
    },
    changeImportantInfo(state, n) {
      state.importantInfo.contractAddress = n.contractAddressL;
      state.importantInfo.isFreelancer = n.isFreelancerL;
      state.importantInfo.isEmployer = n.isEmployerL;
    },
    changeAccountInfo(state, n) {
      state.accountInfo = n;
    }
  },
  getters: {
    employers: state => state.employers,
    freelancers: state => state.freelancers,
    jobs: state => state.jobs,
  },
  actions: {
    setEmployersRef: firebaseAction(({ bindFirebaseRef }, ref) => {
      bindFirebaseRef('employers', ref)
    }),
    setFreelancersRef: firebaseAction(({ bindFirebaseRef }, ref) => {
      bindFirebaseRef('freelancers', ref)
    }),
    setJobsRef: firebaseAction(({ bindFirebaseRef }, ref) => {
      bindFirebaseRef('jobs', ref)
    }),
    setAllEmployerJobsRef: firebaseAction(({ bindFirebaseRef }, ref) => {
      bindFirebaseRef('employers/0xc23f3136e6846f12A6a9A143EaE6DaF08f4F76b2/jobs/', ref)
    })
  },
})
