import { useState } from 'react'
import AuthInput from './AuthInput'
import Button from './Button'
import RememberPassword from './rememberPassword'
import { BsGithub, BsGoogle } from 'react-icons/bs'
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase-utils/firebase.utils'

const defaultFormFields = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
}

const SignUpForm = ({ handleAuthWithGoogle, setIsSignInFormOpen }) => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { username, email, password, confirmPassword } = formFields

  const resetFormFields = () =>{
    setFormFields(defaultFormFields)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (password !== confirmPassword) {
      alert('passords do not match')
      return
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password)
      await createUserDocumentFromAuth(user, { displayName: username })
      resetFormFields()
    } catch (error) {
      if(error.code === 'auth/email-already-in-use'){
        alert('Cannot create user email already in use')
      }else{
        console.log('failed to Sign in ', error)
      }
    }
  }
  const handleChange = (event) => {
    const { name, value } = event.target
    setFormFields({ ...formFields, [name]: value })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <AuthInput
          isValueHasChanges={!!username}
          label="Username"
          type="text"
          required
          onChange={handleChange}
          name="username"
          value={username}
        />
        <AuthInput
          isValueHasChanges={!!email}
          label="Email address"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <AuthInput
          isValueHasChanges={!!password}
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <AuthInput
          isValueHasChanges={!!confirmPassword}
          label="Confirm password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        {/* <!-- Remember me checkbox --> */}
        <RememberPassword />
        {/* <!-- Submit button --> */}
        <Button
          title="signIn"
          type="submit"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          Sign Up
        </Button>
        {/* <!-- Divider --> */}
        <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-500 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-500">
          <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
            OR
          </p>
        </div>
        <div className="flex gap-4">
          <Button
            title="google"
            role="button"
            data-te-ripple-init
            data-te-ripple-color="light"
            type="button"
            onClick={handleAuthWithGoogle}
          >
            {/* <!-- Google --> */}
            <BsGoogle />
            Google
          </Button>
          <Button
            title="github"
            role="button"
            data-te-ripple-init
            data-te-ripple-color="light"
            type="button"
          >
            {/* <!-- GitHub--> */}
            <BsGithub />
            GitHub
          </Button>
        </div>
      </form>
      <p className="text-center">
        Already have an account?{' '}
        <button
          type="button"
          aria-label="change inputs"
          className="text-primary font-semibold"
          onClick={() => setIsSignInFormOpen(true)}
        >
          Sign in
        </button>
      </p>
    </>
  )
}

export default SignUpForm
