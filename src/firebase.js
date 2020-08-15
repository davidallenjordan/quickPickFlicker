  import firebase from 'firebase/app';
  import 'firebase/database';

  // Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCGTiHiUbOdDgDWLE_5L-vE5Ti1Nr9FyDw",
    authDomain: "quick-flick-picker-1d7bd.firebaseapp.com",
    databaseURL: "https://quick-flick-picker-1d7bd.firebaseio.com",
    projectId: "quick-flick-picker-1d7bd",
    storageBucket: "quick-flick-picker-1d7bd.appspot.com",
    messagingSenderId: "1031062113355",
    appId: "1:1031062113355:web:f817b635cd825646d151ce"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;
