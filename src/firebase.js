import firebase from "firebase/app";
import "firebase/messaging";
import "firebase/analytics";

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
const firebaseConfig = {
    apiKey: "AIzaSyBnM9DAKBdK5t--Ilm3CvhE6CPL7GgEgGk",
    authDomain: "aws-builders-gym.firebaseapp.com",
    projectId: "aws-builders-gym",
    storageBucket: "aws-builders-gym.appspot.com",
    messagingSenderId: "261582449605",
    appId: "1:261582449605:web:019557f17cf80c928539ac",
    measurementId: "G-MXCR2QLGF2"
};

firebase.initializeApp(firebaseConfig);

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

// Add the public key generated from the console here.
export const getToken = (setToken) => {
    return messaging.getToken({vapidKey: 'BC1G_XNpBGvgYPHGs5fqsjZR3cqfYsagCYZoFIQfnoULm3lT1NgL5mzEN9SoIqxAsWIblQhVkMfyGuTty64Jltw'}).then((currentToken) => {
      if (currentToken) {
        console.log('current token for client: ', currentToken);
        setToken(currentToken);
        // Track the token -> client mapping, by sending to backend server
        // show on the UI that permission is secured
      } else {
        console.log('No registration token available. Request permission to generate one.');
        // shows on the UI that permission is required 
      }
    }).catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
      // catch error while creating client token
    });
}

export const onMessageListener = () =>
  new Promise((resolve) => {
    messaging.onMessage((payload) => {
      resolve(payload);
    });
});
