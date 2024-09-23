// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAP-dzIw_DDdQuegJPHeJpIZyX3dA0a2Ok",
  authDomain: "indextradefinancegroup.firebaseapp.com",
  projectId: "indextradefinancegroup",
  storageBucket: "indextradefinancegroup.appspot.com",
  messagingSenderId: "219051927448",
  appId: "1:219051927448:web:f847ffbb971bf88d6caded",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
