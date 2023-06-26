import { initializeApp, getApp, getApps, } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAMFw2zYBB2-Dg6O4mQsE3ic5_6ak9ng5c",
  authDomain: "authconfigurator.firebaseapp.com",
  projectId: "authconfigurator",
  storageBucket: "authconfigurator.appspot.com",
  messagingSenderId: "684204730695",
  appId: "1:684204730695:web:a1a3bfb509fe873f238462",
  measurementId: "G-NWXX104YW8"
};



const firebase = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

export const db = getFirestore(firebase)
export const auth = getAuth(firebase);
export const storage = getStorage(firebase);
