import {collection, getDocs, addDoc, doc, getDoc, updateDoc, deleteDoc} from "firebase/firestore";
import {db} from "./firebase-config";


// export const getCollection = async (db, collectionName) => {
//     const querySnapshot = await getDocs(collection(db, collectionName));
//     const data = querySnapshot.docs.map((doc) => doc.data());
//     return data;
//     }

export const addDocument = async (db, collectionName, data) => {
    try {
        const docRef = await addDoc(collection(db, collectionName), data);
        // console.log("Document written with ID: ", docRef.id);
    }
    catch (e) {
        console.error("Error adding document: ", e);
    }
}

// export const getDocument = async (db, collectionName, docId) => {
//     const docRef = doc(db, collectionName, docId);
//     const docSnap = await getDoc(docRef);
//     if (docSnap.exists()) {
//         return docSnap.data();
//     } else {
//         return null;
//     }
// }

// export const updateDocument = async (db, collectionName, docId, data) => {
//     const docRef = doc(db, collectionName, docId);
//     await updateDoc(docRef, data);
// }

export const deleteDocument = async (db, collectionName, docId) => {
    try {
        await deleteDoc(doc(db, collectionName, docId));
    }   
    catch (e) {
        console.error("Error deleting document: ", e);
    }
}
