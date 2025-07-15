// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "logo-generator-493d8.firebaseapp.com",
  projectId: "logo-generator-493d8",
  storageBucket: "logo-generator-493d8.firebasestorage.app",
  messagingSenderId: "316057047401",
  appId: "1:316057047401:web:042d8695daeaf2769dedf8",
  measurementId: "G-NK55NXS643"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);