import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAWsDBEdaVjBiurhlZmOFtsMmnD8Wj-vy4",
  authDomain: "my-portfolio-ac280.firebaseapp.com",
  projectId: "my-portfolio-ac280",
  storageBucket: "my-portfolio-ac280.firebasestorage.app",
  messagingSenderId: "196606522330",
  appId: "1:196606522330:web:a3026027e99d5498edc6e3",
  measurementId: "G-8R4W23Q8WL"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
