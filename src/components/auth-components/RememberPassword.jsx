import { useState } from 'react'
import './button.style.css'

const RememberPassword = () => {
  const [rememberPassword, setRememberPassword] = useState(false)

  return (
    <div className="mb-6 flex items-center justify-between">
      <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
        <input
          className="remember"
          type="checkbox"
          value=""
          id="exampleCheck3"
          checked={rememberPassword}
          onChange={(e) => setRememberPassword(e.target.checked)}
        />
        <label
          className="inline-block pl-[0.15rem] hover:cursor-pointer"
          htmlFor="exampleCheck3"
        >
          Remember me
        </label>
      </div>

      {/* <!-- Forgot password link --> */}
      <a
        href="#!"
        className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
      >
        Forgot password?
      </a>
    </div>
  )
}

export default RememberPassword
