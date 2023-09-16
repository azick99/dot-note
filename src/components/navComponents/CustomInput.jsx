const CustomInput = ({ ...otherProps }) => {
  return (
    <input
      type="text"
      className="bg-white border-light-grayish border-solid border-[2px] rounded-md w-[8rem] transition px-2 font-medium outline-none"
      {...otherProps}
    />
  )
}

export default CustomInput
