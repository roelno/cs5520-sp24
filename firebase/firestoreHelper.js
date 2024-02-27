import {collection, getDocs, addDoc, doc, getDoc, updateDoc, deleteDoc} from "firebase/firestore";
import {db} from "./firebase-config";

export const addDocument = async (db, collectionName, data, docID, subCollection) => {
    try {
        if (docID) {
            await addDoc(collection(doc(db, collectionName, docID), subCollection), data);
        }
        else {
            await addDoc(collection(db, collectionName), data);
        }
        // console.log("Document written with ID: ", docRef.id);
    }
    catch (e) {
        console.error("Error adding document: ", e);
    }
}


export const deleteDocument = async (db, collectionName, docId) => {
    try {
        await deleteDoc(doc(db, collectionName, docId));
    }   
    catch (e) {
        console.error("Error deleting document: ", e);
    }
}


