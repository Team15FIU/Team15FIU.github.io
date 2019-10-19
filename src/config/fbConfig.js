import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var config = {
  apiKey: "AIzaSyBgCRch0C208pv8rNU6OX0crbsAEJUyThA",
    authDomain: "team15-cen.firebaseapp.com",
    databaseURL: "https://team15-cen.firebaseio.com",
    projectId: "team15-cen",
    storageBucket: "team15-cen.appspot.com",
    messagingSenderId: "738528211869",
    appId: "1:738528211869:web:a921a5712d98a93c723574",
    measurementId: "G-7QH6M24RD8"
  };

  // Initialize Firebase
  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true})

  export default firebase;
