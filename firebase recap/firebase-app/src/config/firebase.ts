// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider } from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC80OfiT4N4suLsqe2tGD55Hf0jZx16fl8",
  authDomain: "login-app-4fd59.firebaseapp.com",
  projectId: "login-app-4fd59",
  storageBucket: "login-app-4fd59.appspot.com",
  messagingSenderId: "596365045549",
  appId: "1:596365045549:web:eb35bbea6d99c209c16da4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const database =  getFirestore(app)