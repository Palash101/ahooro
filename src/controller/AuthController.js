// import { db } from "../config/firebaseConfig";
import { auth } from "../config/firebaseConfig";
import {
    signInWithEmailAndPassword,

} from "firebase/auth";
// import { db } from "../config/firebaseConfig";
import {
    // addDoc,
    // collection,
    // where,
    // doc,
    // getDoc,
    // getDocs,
    // query,
    // deleteDoc,
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

// export const createLead = async (data) => {
//     console.log(data, 'auth')
//     try {
//         const ref = await addDoc(collection(db, "users"), data)
//         console.log(ref, 'data added')
//         return { success: true, ref }
//     }
//     catch (err) {
//         console.log(err, 'error')
//         return { success: false, err: err }
//     }
// }

export const createLead = async (data) => {
    return fetch('https://europe-west3-authconfigurator.cloudfunctions.net/one_number ', {
        method: "POST",
        body: JSON.stringify(data)
    })
        .then((res) => { res.json() })
        .then((data) => {
            return { success: true }
        })
        .catch((err) => {
            return { success: false }
        })
}

export const createBlackList = async (data) => {
    console.log('adasdasdasd',data)
    return fetch('https://europe-west3-authconfigurator.cloudfunctions.net/save_blackList ', {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
          },
    })
        .then((res) => { res.json() })
        .then((data) => {
            return { success: true }
        })
        .catch((err) => {
            return { success: false }
        })
}

// export const SearchDoc = async (search) => {
//     console.log(search, 'search')
//     const ref = collection(db, "users")
//     const q = query(ref, where('phone', '==', search))
//     const querySnapshot = await getDocs(q);
//     let data = []
//     querySnapshot.forEach((doc) => {
//         data.push(doc.data());
//     });
//     // console.log(data, 'data added')
//     if (data.length) {
//         return { success: true, data: data }
//     }
//     else {
//         return { success: false }
//     }

// }

export const SearchDoc = async (search) => {
    const url = 'https://europe-west3-authconfigurator.cloudfunctions.net/search?phone=' + search
    return fetch(url, {
        method: "GET"
    })
        .then((res) => res.json())
        .then((data) => {
            if (data.length) {
                console.log(data, 'data added')
                return { success: true, data: data }
            }
            else {
                console.log(data, 'data error')
                return { success: false }
            }
        })
        .catch((err) => {
            return { success: false }
        })

}

export const BlackListSearchDoc = async (blackListSearch) => {
    const url = 'https://europe-west3-authconfigurator.cloudfunctions.net/blackList_search?phone=' + blackListSearch
    return fetch(url, {
        method: "GET"
    })
        .then((res) => res.json())
        .then((data) => {
            if (data.length) {
                return { success: true, data: data }
            }
            else {
                return { success: false }
            }
        })
        .catch((err) => {
            return { success: false }
        })

}

export const AddNewNumber = async (phone) => {

}