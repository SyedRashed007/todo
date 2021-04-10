import firebase from "firebase"

var firebaseConfig = {
    apiKey: "AIzaSyDA5o9mbJwh7dWvluZ00nv522-i9LFy2xs",
    authDomain: "todo-app-79557.firebaseapp.com",
    projectId: "todo-app-79557",
    storageBucket: "todo-app-79557.appspot.com",
    messagingSenderId: "96685161057",
    appId: "1:96685161057:web:245010e7ac91bc5cb78820"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore()

  export { db }