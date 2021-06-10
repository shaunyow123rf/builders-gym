import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Amplify, { ServiceWorker } from 'aws-amplify';
import awsExports from "./aws-exports";

Amplify.configure(awsExports);
const serviceWorker = new ServiceWorker();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Register the service worker with `service-worker.js` with service worker scope `/`.
serviceWorker.register('/service-worker.js', '/');

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
