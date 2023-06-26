import { initializeApp, getApp, getApps, } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAtZ6ffWBTRxNsYKDnOzloUJ8tpU-nGvf8",
  authDomain: "config-project-ac16f.firebaseapp.com",
  databaseURL: "https://config-project-ac16f-default-rtdb.firebaseio.com",
  projectId: "config-project-ac16f",
  storageBucket: "config-project-ac16f.appspot.com",
  messagingSenderId: "377905512113",
  appId: "1:377905512113:web:6adbc80e90ec8293562c90",
  measurementId: "G-V8D8TS0867"
};



const firebase = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

export const db = getFirestore(firebase)
export const auth = getAuth(firebase);
export const storage = getStorage(firebase);
