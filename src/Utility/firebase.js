import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_URL_FIREBASE,
  authDomain: "clone-d6210.firebaseapp.com",
  projectId: "clone-d6210",
  storageBucket: "clone-d6210.appspot.com",
  messagingSenderId: "390568288554",
  appId: "1:390568288554:web:5c14d2e4f8f4bb55563e53",
};
const app=firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db=app.firestore();






