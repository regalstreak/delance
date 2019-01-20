import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

import firebase from 'firebase/app'
import 'firebase/firestore'

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyDxWyeNItVr8-XiRVu919c-rrbKdluUcM8",
  authDomain: "delance-3f9d2.firebaseapp.com",
  databaseURL: "https://delance-3f9d2.firebaseio.com",
  projectId: "delance-3f9d2",
  storageBucket: "delance-3f9d2.appspot.com",
  messagingSenderId: "749098252178"
});

export const db = firebase.firestore();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
