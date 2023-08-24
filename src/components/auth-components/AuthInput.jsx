const AuthInput = ({ label, isSignInInput, ...otherProps }) => {
  return (
    <div
      className={`relative ${
        isSignInInput ? 'mb-6' : 'mb-4'
      } border-b-2 border-neutral-400 `}
      data-te-input-wrapper-init
    >
      <input
        className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-500 dark:placeholder:text-neutral-500 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
        id="exampleFormControlInput3"
        placeholder={label}
        {...otherProps}
      />
      <label
        htmlFor="exampleFormControlInput3"
        className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
      >
        {label}
      </label>
    </div>
  )
}

export default AuthInput
