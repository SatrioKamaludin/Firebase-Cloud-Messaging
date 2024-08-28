importScripts("https://www.gstatic.com/firebasejs/10.13.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.13.0/firebase-messaging-compat.js");

firebase.initializeApp({
    apiKey: "AIzaSyBRzvm1fvnXsGMGhz5iZNFwUkLAVb0CjRA",
    authDomain: "angular-firebase-messagi-dc262.firebaseapp.com",
    databaseURL: "https://angular-firebase-messagi-dc262-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "angular-firebase-messagi-dc262",
    storageBucket: "angular-firebase-messagi-dc262.appspot.com",
    messagingSenderId: "289111023562",
    appId: "1:289111023562:web:de4d97e8a5626fb3af7933",
    measurementId: "G-JTQY59RDK8"
});

const messaging = firebase.messaging();