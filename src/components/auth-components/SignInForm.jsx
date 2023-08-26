import { BsGithub, BsGoogle } from 'react-icons/bs'
import AuthInput from './AuthInput'
import Button from './Button'
import RememberPassword from './rememberPassword'

const SignInForm = ({
  isSignInInput,
  setIsSignInFormOpen,
  handleAuthWithGoogle,
}) => {
  return (
    <>
      <form>
        <AuthInput
          label="Email address"
          type="email"
          isSignInInput={isSignInInput}
          value=''
        />
        <AuthInput
          label="Password"
          type="password"
          isSignInInput={isSignInInput}
          value=''
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
          Sign in
        </Button>
        {/* <!-- Divider --> */}
        <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-500 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-500">
          <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
            OR
          </p>
        </div>

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
          Continue with Google
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
