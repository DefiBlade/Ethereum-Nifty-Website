// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbRpLR5qVY7XwKhPn5YaY2Vs4wNett0ns",
  authDomain: "nifty-805ff.firebaseapp.com",
  projectId: "nifty-805ff",
  storageBucket: "nifty-805ff.appspot.com",
  messagingSenderId: "1060484888080",
  appId: "1:1060484888080:web:def864a908dabf096e7c95",
  measurementId: "G-C1KER8BZ2G"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig)

export default firebase
export const database = firebase.database()
export const storage = firebase.storage()
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
