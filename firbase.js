// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAu2--LGfm0M36Pc_XQ9oUYXNHYbr1ZpFM",
  authDomain: "learn-portfolio.firebaseapp.com",
  projectId: "learn-portfolio",
  storageBucket: "learn-portfolio.appspot.com",
  messagingSenderId: "626323571861",
  appId: "1:626323571861:web:fa7fc58f25061934dcc79c",
  measurementId: "G-QFVCLF00WV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);