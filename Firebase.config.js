// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqJFW2Od4Vd3evyQlWAa9HTlN5bPHp0KQ",
  authDomain: "t-shirt-resources.firebaseapp.com",
  projectId: "t-shirt-resources",
  storageBucket: "t-shirt-resources.appspot.com",
  messagingSenderId: "859427194533",
  appId: "1:859427194533:web:373f7c4c669e89908a6f4c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app