
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCY3YCm3aJfzTM9bOprRfC-YZhOvtMNbvI",
  authDomain: "daily-todo-8cafb.firebaseapp.com",
  projectId: "daily-todo-8cafb",
  storageBucket: "daily-todo-8cafb.appspot.com",
  messagingSenderId: "50795691779",
  appId: "1:50795691779:web:1e6d305c168768e89e7336"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
