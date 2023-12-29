// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC4C3Dx40esUywEx4enFaQfn6y_uIJDdO0",
  authDomain: "platformplayventure.firebaseapp.com",
  projectId: "platformplayventure",
  storageBucket: "platformplayventure.appspot.com",
  messagingSenderId: "348884347737",
  appId: "1:348884347737:web:172caebf28f1f452d87a48",
  measurementId: "G-MVR3TW7D9D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
