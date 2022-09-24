import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAGHrs6arniepdmwQmsKuu6VU3KxX6Ii6A",
  authDomain: "music-ec85b.firebaseapp.com",
  projectId: "music-ec85b",
  storageBucket: "music-ec85b.appspot.com",
  appId: "1:929786790803:web:6ea8b06f44fbed534e1e66",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

const usersCollection = db.collection("users");
const songsCollection = db.collection("songs");
const commentsCollection = db.collection("commennts");

export {
  auth,
  db,
  usersCollection,
  songsCollection,
  commentsCollection,
  storage,
};
