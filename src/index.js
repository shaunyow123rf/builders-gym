import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

import firebase from "firebase/app";
import "firebase/messaging";

import Amplify from 'aws-amplify';
import awsExports from "./aws-exports";

Amplify.configure(awsExports);
// const serviceWorker = new ServiceWorker();
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

const messaging = firebase.messaging();

// Add the public key generated from the console here.
messaging.getToken({vapidKey: "BC1G_XNpBGvgYPHGs5fqsjZR3cqfYsagCYZoFIQfnoULm3lT1NgL5mzEN9SoIqxAsWIblQhVkMfyGuTty64Jltw"}).then((currentToken) => {
  if (currentToken) {
    // Send the token to your server and update the UI if necessary
    // ...
    console.log(currentToken);
  } else {
    // Show permission request UI
    console.log('No registration token available. Request permission to generate one.');
    // ...
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
  // ...
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Register the service worker with `service-worker.js` with service worker scope `/`.
// serviceWorker.register('/service-worker.js', '/');
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
