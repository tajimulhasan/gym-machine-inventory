// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACHQdfHGvB25h497Wol1hRAPjGR381MMg",
  authDomain: "gym-invenoty.firebaseapp.com",
  projectId: "gym-invenoty",
  storageBucket: "gym-invenoty.appspot.com",
  messagingSenderId: "216191600268",
  appId: "1:216191600268:web:987365c6b6388a7cdb5da9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;