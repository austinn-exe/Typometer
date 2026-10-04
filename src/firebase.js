// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgHMbZUNqYBafxrZ03Ho6CFJ70XfCZR-s",
  authDomain: "typometer-0203.firebaseapp.com",
  projectId: "typometer-0203",
  storageBucket: "typometer-0203.firebasestorage.app",
  messagingSenderId: "592460279507",
  appId: "1:592460279507:web:8606b2f97af4c3e324ae26",
  measurementId: "G-PKHZDGYC0H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);