// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-60de2.firebaseapp.com",
  projectId: "mern-blog-60de2",
  storageBucket: "mern-blog-60de2.appspot.com",
  messagingSenderId: "738693775439",
  appId: "1:738693775439:web:4318fa7d695d51e1e46a3a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);