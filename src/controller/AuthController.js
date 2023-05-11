// import { db } from "../config/firebaseConfig";
import { auth } from "../config/firebaseConfig";
import {
    signInWithEmailAndPassword,

} from "firebase/auth";
import { db } from "../config/firebaseConfig";
import {
    addDoc,
    collection,
    doc,
    // getDoc,
    // getDocs,
    // query,
    // deleteDoc,
    // where,
    // updateDoc,
    // setDoc,
    // getStorage,
} from "firebase/firestore";

export const UserEmailLogin = async (loginEmail, loginPassword) => {
    if (loginEmail === "" || loginPassword === "") {
        return { success: false, msg: "Please enter valid details" };
    }
    else {
        const resp = signInWithEmailAndPassword(auth, loginEmail, loginPassword)
            .then(async (userCredential) => {
                const user = userCredential.user;
                // console.log("user: ", user);
                // console.log("id: ", user.uid);
                // console.log("name: ", user.displayName);
                const userData = { email: user.email, uid: user.uid }
                // console.log("userData: ", userData);
                return { success: true, userData };
            })
            .catch((error) => {
                const errorCode = error.code;
                console.log("errorCode: ", errorCode);
                const errorMessage = error.message;
                return { success: false, msg: errorMessage };
            });
        return resp

    }
}

export const createLead = async (data) =>{
    console.log(data,'auth')
    try{
        const ref = await  addDoc(collection(db,"users"),data)
        console.log(ref,'data added')
        return {success:true, ref}
    }
    catch(err){
        return{success:false,err:err}

    }

}