import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyApb4S2aOkPBpn5QX9Be-XXGpRFbT1lFZI",
    authDomain: "disney-clone-85c97.firebaseapp.com",
    projectId: "disney-clone-85c97",
    storageBucket: "disney-clone-85c97.appspot.com",
    messagingSenderId: "259535311867",
    appId: "1:259535311867:web:42489d5fe34ab660a5b15e",
    measurementId: "G-1N101ZNX56"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider= new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
  