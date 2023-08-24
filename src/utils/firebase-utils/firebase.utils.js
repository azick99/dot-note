import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjNXCFiqsIotTzVfLsJL0NqyKbddH236g",
  authDomain: "dot-note-57a1a.firebaseapp.com",
  projectId: "dot-note-57a1a",
  storageBucket: "dot-note-57a1a.appspot.com",
  messagingSenderId: "909938644505",
  appId: "1:909938644505:web:e05e249c74493fb42b3c88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
  prompt: 'select_account',
})

export const auth = getAuth()

export const signInWithGooglePopup = () => signInWithPopup(auth, provider)