import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBuOMJIpHTBArjR3Lo4GQFc6VWcm8NJcyQ",
    authDomain: "tinder-clone-38c99.firebaseapp.com",
    databaseURL: "https://tinder-clone-38c99.firebaseio.com",
    projectId: "tinder-clone-38c99",
    storageBucket: "tinder-clone-38c99.appspot.com",
    messagingSenderId: "756657311412",
    appId: "1:756657311412:web:54853a60f274fe888111e1",
    measurementId: "G-78FSCQF1W1"
  };

  const firebaseapp = firebase. initializeApp(firebaseConfig);

  const database = firebaseapp.firestore();

  export default database;