import { initializeApp, getApp, getApps, } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyDKfm4Qt6MzZCi_I86ATjcoUMho8efVwLU",
//   authDomain: "ahoraahorro-7ac91.firebaseapp.com",
//   projectId: "ahoraahorro-7ac91",
//   storageBucket: "ahoraahorro-7ac91.appspot.com",
//   messagingSenderId: "559823829352",
//   appId: "1:559823829352:web:e4e3f673a79ab1d9acbedd",
//   measurementId: "G-H1HVHFXV9P"
// };

const firebaseConfig = {
  apiKey: "AIzaSyB1rzPXISLoq3A8o18xTT-4KlyMb-B617w",
  authDomain: "hartodepagar.firebaseapp.com",
  projectId: "hartodepagar",
  storageBucket: "hartodepagar.appspot.com",
  messagingSenderId: "787078631641",
  appId: "1:787078631641:web:adefc8aeebd96cd400eec8",
  measurementId: "G-K561CYT6D9"
};


const firebase = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

export const db = getFirestore(firebase)
export const auth = getAuth(firebase);
export const storage = getStorage(firebase);
