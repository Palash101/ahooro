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

// tool api
const apiPath = "https://europe-west3-authconfigurator.cloudfunctions.net/"

// toolNew api
// const apiPath = "https://europe-west3-config-project-ac16f.cloudfunctions.net/"

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

// add csv file

export const saveCsvFile = async (data) => {
    return fetch(apiPath + 'slicer', {
        method: "POST",
        body: data,
        headers: {
        }
    })
        .then((res) => res.text())
        .then(data => {
            if (data) {
                return { success: true, data: data }
            }
            return { success: false }
        })
        .catch(err => console.log(err))
}

export const createLead = async (data) => {
    return fetch(apiPath + 'one_number ', {
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
    console.log('adasdasdasd', data)
    return fetch(apiPath + 'save_blackList ', {
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
    const url = apiPath + 'search?phone=' + search
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

export const SearchSms = async (search) => {
    const url = apiPath + 'search-user-sms?phone=' + search
    return fetch(url, {
        method: "GET"
    })
        .then((res) => res.json())
        .then((data) => {
            if (data) {
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
    const url = apiPath + 'blackList_search?phone=' + blackListSearch
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

export const GetCsvList = async () => {
    const url = apiPath + 'getCsvList'
    return fetch(url, {
        method: "GET"
    })
        .then((res) => res.json())
        .then((data) => {
            if (data) {
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

export const DownloadCsv = async (csv_name) => {
    console.log("csv_name: ", csv_name);
    return fetch(apiPath + 'getCsv', {
        method: "POST",
        body: JSON.stringify({ data: csv_name }),
    })
        .then((res) => res.blob())
        .then((data) => {
            // console.log("data: ", data);
            const objectURL = URL.createObjectURL(data);
            return { success: true, data: objectURL }
        })
        .catch((err) => {
            console.log("err: ", err);
            return { success: false }
        })

}

export const DeleteCsv = async (csv_name) => {
    return fetch(apiPath + 'delete_csv', {
        method: "POST",
        body: JSON.stringify({ file: csv_name, type: "document" }),
    })
        .then((res) => {
            if (res.status === 200) {
                return { success: true }
            } else {
                return { success: false }
            }
        })

}

export const SendMassage = async (data) => {
    return fetch("https://us-central1-authconfigurator.cloudfunctions.net/sms", {
        method: "POST",
        body: JSON.stringify(data),
    })
        // .then((res) => {
        //     if (res.status === 200) {
        //         return { success: true }
        //     } else {
        //         return { success: false }
        //     }
        // })

        .then((res) => res.json())
        .then((data) => {
            return { success: true }
        })
        .catch((err) => {
            return { success: false }
        })

}

export const DeleteBlackListNumber = async (blackListNumber) => {
    console.log(blackListNumber, "data")
    return fetch(apiPath + 'delete_blackList ', {
        method: "POST",
        body: JSON.stringify({
            docId: blackListNumber
        }),
    })
        .then((res) => res.json())
        .then((data) => {
            return { success: true }
        })
        .catch((err) => {
            return { success: false }
        })

}

export const DownloadPhoneSms = async (data) => {

    return fetch(apiPath + 'create_csv_one_number_sms', {
        method: "POST",
        body: JSON.stringify({docId: data}),
        headers: {
        }
    })
        .then((res) => res.blob())
        .then((data) => {
            // console.log("data: ", data);
            const objectURL = URL.createObjectURL(data);
            return { success: true, data: objectURL }
        })
        .catch((err) => {
            console.log("err: ", err);
            return { success: false }
        })
}



export const AcceptPrivacy = async (data) => {
    console.log(data, "data")
    // const Ref = doc(collection(db, "users_sms"));
    // await setDoc(Ref, data);
}