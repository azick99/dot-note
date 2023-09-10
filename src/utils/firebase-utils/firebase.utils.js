import {
  GithubAuthProvider,
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

const googleProvider = new GoogleAuthProvider()
googleProvider.setCustomParameters({
  prompt: 'select_account',
  allow_signup: 'false',
})

export const auth = getAuth()

export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation
) => {
  if (!userAuth) {
    console.log('userAuth is null or undefined')
    return
  }
  const userDocRef = doc(db, 'users', userAuth.uid)

  try {
    const userSnapshot = await getDoc(userDocRef)

    if (!userSnapshot.exists()) {
      const { displayName, email } = userAuth
      const createdAt = new Date()
      const userData = {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      }
      await setDoc(userDocRef, userData)
    }
  } catch (error) {
    console.error('Error creating user document:', error)
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

// GitHub Auth

const githubProvider = new GithubAuthProvider()

githubProvider.addScope('repo')

githubProvider.setCustomParameters({
  allow_signup: 'false',
})

export const signInWithGitHubPopup = async () => {
  try {
    const result = await signInWithPopup(auth, githubProvider)
    return result.user
  } catch (error) {
    console.error('GitHub Sign-In Error', error)
    // Handle specific error cases, e.g., display an error message to the user.
    if (error.code === 'auth/account-exists-with-different-credential') {
      // Handle the case where a GitHub-linked account already exists with a different provider.
      alert('An account with the same email address already exists.')
      await signInWithGooglePopup(auth, googleProvider)
    } else {
      alert('Something went wrong. Please try again.')
    }
  }
}
