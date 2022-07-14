import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getStorage} from "firebase/storage"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDmpB-qZ-oNpuVFaR4btR5MzK9DqympC9g",
    authDomain: "richpanel-10d17.firebaseapp.com",
    projectId: "richpanel-10d17",
    storageBucket: "richpanel-10d17.appspot.com",
    messagingSenderId: "634397400369",
    appId: "1:634397400369:web:85af011f57b74e0b256410",
    measurementId: "G-60Q1L6ET34"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  export const storage = getStorage(app);
  export const db = getFirestore(app);

  export default app;