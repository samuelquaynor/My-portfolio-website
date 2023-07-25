// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlgW_-71OtU6Pv86_o_3Xja1GroMmnRNQ",
  authDomain: "portfolio-ad81f.firebaseapp.com",
  projectId: "portfolio-ad81f",
  storageBucket: "portfolio-ad81f.appspot.com",
  messagingSenderId: "517974354418",
  appId: "1:517974354418:web:e44c86bbecf0411782636b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage, app };
