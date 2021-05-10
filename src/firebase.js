import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAZmPvRr6OlGi16GL7K1q5mNpt0zzGWRmU",
    authDomain: "facebook-messenger-clone-c41a6.firebaseapp.com",
    projectId: "facebook-messenger-clone-c41a6",
    storageBucket: "facebook-messenger-clone-c41a6.appspot.com",
    messagingSenderId: "241608900969",
    appId: "1:241608900969:web:96ae748998b567c062bdf8",
    measurementId: "G-2RSCRWRN80"
});
const db = firebaseApp.firestore();
//export default db;
export {db};