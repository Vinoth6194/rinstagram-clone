import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAcZKdqZhyGC1rJke24bXUP9OYZhdVgJls",
  authDomain: "instagram-clone-fe175.firebaseapp.com",
  databaseURL: "https://instagram-clone-fe175.firebaseio.com",
  projectId: "instagram-clone-fe175",
  storageBucket: "instagram-clone-fe175.appspot.com",
  messagingSenderId: "95333554938",
  appId: "1:95333554938:web:b87dc5b1346874224ac743",
  measurementId: "G-ZRF0WFDN38",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
export { db, auth, storage };
