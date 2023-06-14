// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiJduApFkxQLx9JgsWWmSANcEYR6FmVao",
  authDomain: "zark-dev-cef56.firebaseapp.com",
  databaseURL: "https://zark-dev-cef56.firebaseio.com",
  projectId: "zark-dev-cef56",
  storageBucket: "zark-dev-cef56.appspot.com",
  messagingSenderId: "852718360729",
  appId: "1:852718360729:web:b6011a193a2275fbfe4008",
  measurementId: "G-NT6DKRE27R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    console.log(user);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
  signOut(auth);
};

export { auth, signInWithGoogle, logout };
