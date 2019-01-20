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
  apiKey: "Firebase api key",
  authDomain: "yourApp.firebaseapp.com",
  databaseURL: "https://youtApp.firebaseio.com",
  projectId: "projectID",
  storageBucket: "bucket.appspot.com",
  messagingSenderId: "0000000000"
});

export const db = firebase.firestore();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
