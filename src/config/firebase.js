// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// IMPORT  FUNCTIONS FROM FIREBASE
import {getAuth} from 'firebase/auth';
//activate firebase to initialize the services from firebase
import {getFirestore} from 'firebase/firestore';  //cloud storage


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChnSEAQNiHiYUPFYv4lqW-XjtI1yVw8i0",
  authDomain: "hotel-app-5d3f9.firebaseapp.com",
  projectId: "hotel-app-5d3f9",
  storageBucket: "hotel-app-5d3f9.appspot.com",
  messagingSenderId: "384371534243",
  appId: "1:384371534243:web:a176aa4da31e5e56411216"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//database storage | fire store for adding user data
const db = getFirestore(app);
// I DID NOT INCLUDE THE GOOGLE ANALYTICS CONTENTS
// for user Authentication methods access.
const auth = getAuth(app);

export {auth};      //firebase
export {db};      //firestore