// Import the functions you need from the SDKs you need
import { initializeApp, getApp,getApps } from "firebase/app";
import {getAuth} from  "firebase/auth"
import { getFirestore } from "firebase-admin/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIA2CmC2OXLaszRCaZKSf_9HBzD_HeYuY",
  authDomain: "prepwise-16e44.firebaseapp.com",
  projectId: "prepwise-16e44",
  storageBucket: "prepwise-16e44.firebasestorage.app",
  messagingSenderId: "538489890312",
  appId: "1:538489890312:web:42c9959784cd875e4913bd",
  measurementId: "G-19YYY97KJB"
};

// Initialize Firebase
const app = !getApps.length ?initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app)
