// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAnoboyUPY5gvGdo8F57H3sY_8MFhUuWug",
  authDomain: "ignou-solution-hub-44d39.firebaseapp.com",
  projectId: "ignou-solution-hub-44d39",
  storageBucket: "ignou-solution-hub-44d39.firebasestorage.app",
  messagingSenderId: "13808797212",
  appId: "1:13808797212:web:7e2d2623b2a1d9ab08c1d9"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
