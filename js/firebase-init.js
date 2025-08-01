// Import Firebase core and services from CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-firestore.js";
import { getAnalytics, isSupported } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-analytics.js";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBXKiAKmQXJxxYJdBMiF7nuSkNXrotEW1I",
    authDomain: "gymwebsite-5df52.firebaseapp.com",
    projectId: "gymwebsite-5df52",
    storageBucket: "gymwebsite-5df52.appspot.com",
    messagingSenderId: "494794343106",
    appId: "1:494794343106:web:5d9e7ca706286878c3b15b",
    measurementId: "G-KJHSRY9XCC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Conditionally initialize Analytics only if supported
let analytics;
isSupported().then(supported => {
    if (supported) {
        analytics = getAnalytics(app);
    } else {
        console.warn("Firebase Analytics is not supported in this environment.");
    }
});

// Initialize Auth and Firestore
const auth = getAuth(app);
const db = getFirestore(app);

// Export
export { auth, db, analytics };
