import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC9idCN7m3h9I7Z79MsYzfUcEmpXKuYNqE",
    authDomain: "firegram-952ec.firebaseapp.com",
    databaseURL: "https://firegram-952ec.firebaseio.com",
    projectId: "firegram-952ec",
    storageBucket: "firegram-952ec.appspot.com",
    messagingSenderId: "999521890455",
    appId: "1:999521890455:web:7318802497dcb9401379d2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectFirestore, projectStorage, timestamp };