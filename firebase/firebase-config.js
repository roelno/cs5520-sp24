// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcRHnpz2v_D3jS6sWxIpDCP8cikv6OlZ4",
  authDomain: "db-demo-99120.firebaseapp.com",
  projectId: "db-demo-99120",
  storageBucket: "db-demo-99120.appspot.com",
  messagingSenderId: "167662265223",
  appId: "1:167662265223:web:44c924edef224442792922",
  measurementId: "G-SW90GLWK7W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);