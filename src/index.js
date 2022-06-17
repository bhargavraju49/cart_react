import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';



const firebaseConfig = {
  apiKey: "AIzaSyDjbiUyGugzxFvcFWMfqMTlxSuUIvQ-N-M",
  authDomain: "cart-1a690.firebaseapp.com",
  projectId: "cart-1a690",
  storageBucket: "cart-1a690.appspot.com",
  messagingSenderId: "853326744182",
  appId: "1:853326744182:web:cbb803a38366b7a387ad57"
};

const firebaseApp = initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default firebaseApp;