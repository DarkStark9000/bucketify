// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_dMIGOf3I4EmvN4CjVFvZxTTb5nuLAiA",
  authDomain: "bucketify-01.firebaseapp.com",
  projectId: "bucketify-01",
  storageBucket: "bucketify-01.appspot.com",
  messagingSenderId: "283191193764",
  appId: "1:283191193764:web:a89eb8c8d4c0ea9516f631",
  measurementId: "G-26KMS5VGKL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
