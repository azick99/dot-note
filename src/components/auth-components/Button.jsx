import './button.style.css'

const Button = ({ children, buttonType, ...otherProps }) => {
  const BUTTON_TYPE_CLASSES = {
    signIn: 'signIn',
    github: 'github',
    google: 'google',
  }
  //implementing in bg-color did not work in css so I made it in jsx file

  let bgColor
  if (buttonType === 'signIn') {
    bgColor = 'bg-primary'
  }
  if (buttonType === 'github') {
    bgColor = 'bg-almost-dark/80'
  }
  if (buttonType === 'google') {
    bgColor = 'bg-info-800'
  }

  return (
    <button
      className={`${BUTTON_TYPE_CLASSES[buttonType]} ${bgColor} w-full rounded px-7 pb-2.5 pt-3 font-medium uppercase leading-normal text-white transition duration-150 ease-in-out`}
      {...otherProps}
    >
      {children}
    </button>
  )
}

export default Button
