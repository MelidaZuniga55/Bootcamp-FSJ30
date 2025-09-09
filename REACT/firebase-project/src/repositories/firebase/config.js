// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2SckPwsds7m9dddx4kRTRqJ7hAgnCtl0",
  authDomain: "authentification-app-d8f8d.firebaseapp.com",
  projectId: "authentification-app-d8f8d",
  storageBucket: "authentification-app-d8f8d.firebasestorage.app",
  messagingSenderId: "185123809931",
  appId: "1:185123809931:web:8f4ff657ca9637e7cb828e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);