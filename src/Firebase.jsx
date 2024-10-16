import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDK3B63_d6ZJQx40aTPTFk0Qsftn6j722Y",
  authDomain: "library-managment-c9e65.firebaseapp.com",
  projectId: "library-managment-c9e65",
  storageBucket: "library-managment-c9e65.appspot.com",
  messagingSenderId: "1015137699416",
  appId: "1:1015137699416:web:bf66eeb4fffa60d0cb6c2d"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export default app;