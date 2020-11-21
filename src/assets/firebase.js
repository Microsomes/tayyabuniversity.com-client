import firebase from 'firebase/app'
  
const firebaseConfig = {
    apiKey: "AIzaSyD1pMrwa5v7unfp_bOMCZ_KHyu70BDIU_8",
    authDomain: "tayyabuniversity-e44ca.firebaseapp.com",
    databaseURL: "https://tayyabuniversity-e44ca.firebaseio.com",
    projectId: "tayyabuniversity-e44ca",
    storageBucket: "tayyabuniversity-e44ca.appspot.com",
    messagingSenderId: "953849748325",
    appId: "1:953849748325:web:be3e74dad3b05109f11f8c"
  }

const app=  firebase.initializeApp(firebaseConfig)




export default app;