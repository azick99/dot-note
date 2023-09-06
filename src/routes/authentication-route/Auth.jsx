import WrapSections from '../../components/htc/WrapSections'
import { useState } from 'react'
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInWithGitHubPopup,
} from '../../utils/firebase-utils/firebase.utils'
import { useDispatch } from 'react-redux'
import { setUserData } from '../notes-route/features/notesSlice'
import { useNavigate } from 'react-router-dom'
import SignInForm from '../../components/auth-components/SignInForm'
import SignUpForm from '../../components/auth-components/SignUpForm'

const Auth = () => {
  const [isSignInFormOpen, setIsSignInFormOpen] = useState(true)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const userDispatcher = (user) => {
    const userData = {
      id: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
    }
    dispatch(setUserData(userData))
    navigate('/notes/1')
  }

  const handleAuthWithGoogle = async () => {
    try {
      const { user } = await signInWithGooglePopup()
      const userDocRef = await createUserDocumentFromAuth(user)
      userDispatcher(user)
    } catch (err) {
      console.log('Failed to fetch: ' + err)
    }
  }

  const handleAuthWithGitHub = async () => {
    try {
      const user = await signInWithGitHubPopup()
      const userDocRef = await createUserDocumentFromAuth(user)
      userDispatcher(user)
    } catch (err) {
      console.log('Failed to fetch: ' + err)
    }
  }

  return (
    <WrapSections>
      <section className="h-screen">
        <div className="container h-full px-6 py-24">
          <div className="g-6 flex flex-row-reverse h-full flex-wrap items-center justify-center lg:justify-between">
            {/* <!-- Left column container with background--> */}
            <div className="mb-12 md:mb-0 md:w-8/12 p-6 lg:w-6/12">
              <img
                src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                className="w-full"
                alt="Phone image"
              />
            </div>

            {/* <!-- Right column container with form --> */}
            <div className="md:w-8/12 lg:ml-6 border-slate-300 border-2 p-8 rounded-md lg:w-5/12">
              {isSignInFormOpen ? (
                <SignInForm
                  handleAuthWithGoogle={handleAuthWithGoogle}
                  isSignInFormOpen={isSignInFormOpen}
                  setIsSignInFormOpen={setIsSignInFormOpen}
                  handleAuthWithGitHub={handleAuthWithGitHub}
                  userDispatcher={userDispatcher}
                />
              ) : (
                <SignUpForm
                  handleAuthWithGoogle={handleAuthWithGoogle}
                  setIsSignInFormOpen={setIsSignInFormOpen}
                  handleAuthWithGitHub={handleAuthWithGitHub}
                  userDispatcher={userDispatcher}
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </WrapSections>
  )
}

export default Auth
