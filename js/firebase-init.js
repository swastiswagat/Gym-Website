// Import Firebase modules from CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-analytics.js";

// Your Firebase config (replace with your actual keys)
const firebaseConfig = {
    apiKey: "AIzaSyBXKiAKmQXJxxYJdBMiF7nuSkNXrotEW1I",
    authDomain: "gymwebsite-5df52.firebaseapp.com",
    projectId: "gymwebsite-5df52",
    storageBucket: "gymwebsite-5df52.firebasestorage.app",
    messagingSenderId: "494794343106",
    appId: "1:494794343106:web:5d9e7ca706286878c3b15b",
    measurementId: "G-KJHSRY9XCC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { auth, db, analytics };