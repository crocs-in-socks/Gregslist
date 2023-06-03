// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";


import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyCnKyG3Z60X6nv3tsFX8X18a7vUHcMMEmk",

  authDomain: "gregslist-6b3a4.firebaseapp.com",

  projectId: "gregslist-6b3a4",

  storageBucket: "gregslist-6b3a4.appspot.com",

  messagingSenderId: "657846186070",

  appId: "1:657846186070:web:d96643f94518ec61288bf7"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
