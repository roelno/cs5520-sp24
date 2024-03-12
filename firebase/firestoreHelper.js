import {collection, getDocs, addDoc, doc, getDoc, updateDoc, deleteDoc} from "firebase/firestore";
import {db} from "./firebase-config";

export const addDocument = async (db, data, collectionName, docID, subCollection) => {
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

export const getAllDocs = async (path) => {
    try {
        const querySnapShot = await getDocs(collection(db, path));
        let newArray = [];
        querySnapShot.forEach((doc) => {
            newArray.push(doc.data());
            console.log(doc.data());
        });
        return newArray;
    }   
    catch (e) {
        console.error("Error get all docs: ", e);
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


