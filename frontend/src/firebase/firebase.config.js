// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKn_rG7YTOAb-Fe_ia8L_bWp5lyS_wfmQ",
  authDomain: "studentexchangeemporium.firebaseapp.com",
  projectId: "studentexchangeemporium",
  storageBucket: "studentexchangeemporium.appspot.com",
  messagingSenderId: "753306657468",
  appId: "1:753306657468:web:a99a7a9a12d9b68da766b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

export {app, auth};
export default db;

