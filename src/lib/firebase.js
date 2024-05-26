// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyDSH7s_vN63klijoB0e7ivAb8jyx5F5LPE",
	authDomain: "investinspire-3b5e4.firebaseapp.com",
	projectId: "investinspire-3b5e4",
	storageBucket: "investinspire-3b5e4.appspot.com",
	messagingSenderId: "861782288484",
	appId: "1:861782288484:web:101c77644ccafe960ed771",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage();
