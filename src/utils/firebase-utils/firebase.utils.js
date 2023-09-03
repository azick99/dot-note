import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth'
import { initializeApp } from 'firebase/app'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBjNXCFiqsIotTzVfLsJL0NqyKbddH236g',
  authDomain: 'dot-note-57a1a.firebaseapp.com',
  projectId: 'dot-note-57a1a',
  storageBucket: 'dot-note-57a1a.appspot.com',
  messagingSenderId: '909938644505',
  appId: '1:909938644505:web:e05e249c74493fb42b3c88',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
  prompt: 'select_account',
})

export const auth = getAuth()

export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation
) => {
  if (!userAuth) return
  const userDocRef = doc(db, 'users', userAuth.uid)

  const userSnapshot = await getDoc(userDocRef)

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date()
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      })
    } catch (error) {
      console.log('error create the user', error.message)
    }
  }
  return userDocRef
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return
  return await createUserWithEmailAndPassword(auth, email, password)
}
export const signInAuthWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return
  return await signInWithEmailAndPassword(auth, email, password)
}
