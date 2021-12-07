import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './index.css';
import App from './App';
import SAMPLE_PETS from './data/pets.json';

import firebase from 'firebase/app';

// NEEDED LATER, PLEASE DONT DELETE
// import 'firebase/auth';
// import 'firebase/database';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsglFH_7eevrXl0VjeY9wMfM3fswrD4mg",
  authDomain: "feedme-6f956.firebaseapp.com",
  projectId: "feedme-6f956",
  storageBucket: "feedme-6f956.appspot.com",
  messagingSenderId: "367516649049",
  appId: "1:367516649049:web:32efb2a7de05896c251348",
  measurementId: "G-4LWD4VP8DP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


// our app
ReactDOM.render(<BrowserRouter> <App pets={SAMPLE_PETS} /> </BrowserRouter>, document.getElementById('root'));
