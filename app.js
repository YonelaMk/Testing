// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1uByR-eH4nrlEmgvpUr2qJycIkeSZjWU",
  authDomain: "testing-js-bb0b7.firebaseapp.com",
  projectId: "testing-js-bb0b7",
  storageBucket: "testing-js-bb0b7.appspot.com",
  messagingSenderId: "787819132249",
  appId: "1:787819132249:web:ec9425ccf0bf7b51854848",
  measurementId: "G-GFR9K7RPKK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);