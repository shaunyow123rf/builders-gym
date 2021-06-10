// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = {
    apiKey: "AIzaSyBnM9DAKBdK5t--Ilm3CvhE6CPL7GgEgGk",
    authDomain: "aws-builders-gym.firebaseapp.com",
    projectId: "aws-builders-gym",
    storageBucket: "aws-builders-gym.appspot.com",
    messagingSenderId: "261582449605",
    appId: "1:261582449605:web:019557f17cf80c928539ac",
    measurementId: "G-MXCR2QLGF2"
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
    console.log('Received background message ', payload);

    const notificationTitle = payload.data['pinpoint.notification.title'];
    const notificationOptions = {
        body: payload.data['pinpoint.notification.body'],
    };

    self.registration.showNotification(notificationTitle,
        notificationOptions);
});