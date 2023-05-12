import { initializeApp, getApp, getApps, } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDKfm4Qt6MzZCi_I86ATjcoUMho8efVwLU",
  authDomain: "ahoraahorro-7ac91.firebaseapp.com",
  projectId: "ahoraahorro-7ac91",
  storageBucket: "ahoraahorro-7ac91.appspot.com",
  messagingSenderId: "559823829352",
  appId: "1:559823829352:web:e4e3f673a79ab1d9acbedd",
  measurementId: "G-H1HVHFXV9P"
};

// const firebaseConfig = {
//   apiKey: "AIzaSyBrH7WR1Dyhevr6OYGnc2I2mmDjW1fZalM",
//   authDomain: "onlycouple-46999.firebaseapp.com",
//   projectId: "onlycouple-46999",
//   storageBucket: "onlycouple-46999.appspot.com",
//   messagingSenderId: "1037026162349",
//   appId: "1:1037026162349:web:42b09412b8bdacf047b824",
//   measurementId: "G-HJV8RR1BRQ"
// };


const firebase = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

export const db = getFirestore(firebase)
export const auth = getAuth(firebase);
export const storage = getStorage(firebase);
