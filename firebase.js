// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCOF3ltL35qt8pbx7geLvbdqTXozEMLnI",
  authDomain: "woodsoul-7b73c.firebaseapp.com",
  databaseURL: "https://woodsoul-7b73c-default-rtdb.firebaseio.com",
  projectId: "woodsoul-7b73c",
  storageBucket: "woodsoul-7b73c.firebasestorage.app",
  messagingSenderId: "117402787109",
  appId: "1:117402787109:web:c23345796e4f499a7c4ecc",
  databaseURL: "https://woodsoul-7b73c-default-rtdb.firebaseio.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase
export const auth = getAuth(app);
export const db = getFirestore(app);
export const rtdb = getDatabase(app);
