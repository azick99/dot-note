import { BsGithub, BsGoogle } from 'react-icons/bs'
import AuthInput from './AuthInput'
import Button from './Button'
import RememberPassword from './rememberPassword'
import { useState } from 'react'
import { signInAuthWithEmailAndPassword } from '../../utils/firebase-utils/firebase.utils'

const defaultFormFields = {
  email: '',
  password: '',
}


const SignInForm = ({
  isSignInInput,
  setIsSignInFormOpen,
  handleAuthWithGoogle,
}) => {

  const [formFields, setFormFields] = useState(defaultFormFields)

  const { email, password} = formFields

  const resetFormFields = () =>{
    setFormFields(defaultFormFields)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const respose = await signInAuthWithEmailAndPassword(email, password)
      resetFormFields()
      console.log(respose)
    } catch (error) {
      console.log('Error in fetching', error)
      if(error.code === 'auth/user-not-found'){
        alert('User is not found!')
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
        isValueHasChanges={!!email}
          label="Email address"
          type="email"
          isSignInInput={isSignInInput}
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <AuthInput
        isValueHasChanges={!!password}
          label="Password"
          type="password"
          isSignInInput={isSignInInput}
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        {/* <!-- Remember me checkbox --> */}
        <RememberPassword />
        {/* <!-- Submit button --> */}
        <Button
          buttonType="signIn"
          type="submit"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          Sign in
        </Button>
        {/* <!-- Divider --> */}
        <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-500 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-500">
          <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
            OR
          </p>
        </div>

        <Button
          buttonType="google"
          role="button"
          data-te-ripple-init
          data-te-ripple-color="light"
          type="button"
          onClick={handleAuthWithGoogle}
        >
          {/* <!-- Google --> */}
          <BsGoogle />
          Continue with Google
        </Button>
        <Button
          buttonType="github"
          role="button"
          data-te-ripple-init
          data-te-ripple-color="light"
          type="button"
        >
          {/* <!-- GitHub--> */}
          <BsGithub />
          Continue with GitHub
        </Button>
      </form>
      <p className="text-center">
        Don&apos;t have an account?{' '}
        <button
          type="button"
          aria-label="change inputs"
          className="text-primary font-semibold"
          onClick={() => setIsSignInFormOpen(false)}
        >
          Register
        </button>
      </p>
    </>
  )
}

export default SignInForm
