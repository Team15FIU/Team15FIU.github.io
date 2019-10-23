import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var config = {
  apiKey: "AIzaSyDZvhHCVAm1Dnr2-lG7UuuUBexWoMgXVgU",
    authDomain: "temp-b9763.firebaseapp.com",
    databaseURL: "https://temp-b9763.firebaseio.com",
    projectId: "temp-b9763",
    storageBucket: "temp-b9763.appspot.com",
    messagingSenderId: "572615655469",
    appId: "1:572615655469:web:730209fbc654a5b3d938a4",
    measurementId: "G-5T2K1CTK14"
  };

  // Initialize Firebase
  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true})

  export default firebase;
