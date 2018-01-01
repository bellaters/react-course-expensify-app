 import * as firebase from 'firebase';

 const config = {
    apiKey: "AIzaSyDXIsaMd6uTvn5tHUoOmrxrw2w2_Prs_Kk",
    authDomain: "expensify-d4907.firebaseapp.com",
    databaseURL: "https://expensify-d4907.firebaseio.com",
    projectId: "expensify-d4907",
    storageBucket: "expensify-d4907.appspot.com",
    messagingSenderId: "1073071908734"
  };

  firebase.initializeApp(config);
  // Getting firebase
  firebase.database().ref().set({
    name: 'Foo Bar'
});