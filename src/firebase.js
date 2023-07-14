// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyATBDKZAWxnyLhP-oL8ego57LlRDElwSoc",
    authDomain: "todo-app-gagan.firebaseapp.com",
    projectId: "todo-app-gagan",
    storageBucket: "todo-app-gagan.appspot.com",
    messagingSenderId: "550842749216",
    appId: "1:550842749216:web:f2a15975ed2365cfcac745",
    measurementId: "G-TW6NP39YBQ"
});

const db = firebaseApp.firestore();

export default db;