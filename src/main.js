import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

var firebase = require("firebase/app");

require("firebase/auth");
//require("firebase/database");
//require("firebase/firestore");
//require("firebase/messaging");
//require("firebase/functions");

  // Initialize Firebase
var config = {
    apiKey: "AIzaSyDA20vUykGv_fdbaYNgapFVrFt3RPVcrR8",
    authDomain: "kero-abca8.firebaseapp.com",
    databaseURL: "https://kero-abca8.firebaseio.com",
    projectId: "kero-abca8",
    storageBucket: "kero-abca8.appspot.com",
    messagingSenderId: "358303780388"
  };
firebase.initializeApp(config);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
