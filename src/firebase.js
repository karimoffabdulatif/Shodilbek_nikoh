// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD-p94pE73rD30dd7QyfMC1ZKwvoQk6DVs",
  authDomain: "shodilbek-cd044.firebaseapp.com",
  projectId: "shodilbek-cd044",
  storageBucket: "shodilbek-cd044.firebasestorage.app",
  messagingSenderId: "245230448797",
  appId: "1:245230448797:web:0d69ef2a9b7ce54a5d6474",
  measurementId: "G-WBZN8HECTG"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);
