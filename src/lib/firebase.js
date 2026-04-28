import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  projectId: "project-ecom-piyush-2026",
  appId: "1:647293387646:web:597397b819b4713f24a92f",
  storageBucket: "project-ecom-piyush-2026.firebasestorage.app",
  apiKey: "AIzaSyAc9-W9Jzw2E-Q7p71RJF90-V2qAQ45FbE",
  authDomain: "project-ecom-piyush-2026.firebaseapp.com",
  messagingSenderId: "647293387646"
};

// Initialize Firebase
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
