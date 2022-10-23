// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6nR1yMZ30E-wUGwXI4pQ4P9Fr0WscpHM",
  authDomain: "ema-john-simple-d61e5.firebaseapp.com",
  projectId: "ema-john-simple-d61e5",
  storageBucket: "ema-john-simple-d61e5.appspot.com",
  messagingSenderId: "108499895447",
  appId: "1:108499895447:web:a8eaf7fc337ea2a68955d2",
  measurementId: "G-6B9E16XRBT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;
