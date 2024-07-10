// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBkyIOXl5J06SuqY-bap1U-mnWSjwCK234",
    authDomain: "dragon-news-auth-d2174.firebaseapp.com",
    projectId: "dragon-news-auth-d2174",
    storageBucket: "dragon-news-auth-d2174.appspot.com",
    messagingSenderId: "454885268861",
    appId: "1:454885268861:web:0ae80e6ef82522b6f7c014"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;