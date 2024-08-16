import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-storage.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAuFo7XsL5C8-pG8j_BIrEDrskQ0xCYk_I",
    authDomain: "blogging-app-babar.firebaseapp.com",
    projectId: "blogging-app-babar",
    storageBucket: "blogging-app-babar.appspot.com",
    messagingSenderId: "499743394602",
    appId: "1:499743394602:web:8769acb9cc69f85bc1ec53",
    measurementId: "G-JQBSX4YB2E" 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);