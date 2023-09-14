const EditButton = ({ children, title, ...otherProps }) => {
  let classname = ' bg-white/60 rounded-md py-[1px] px-3  '
  if (title === 'nav-edit') {
    classname =
      ' self-start  bg-white/70 rounded-md p-1 absolute z-10 top-[10px] right-8'
  }
  if (title === 'general-edit') {
    classname = ' bg-white/70 rounded-md p-1 '
  }
  return (
    <button
      type="button"
      className={`${classname} flex items-center border-[1px] border-solid border-almost-dark/30 hover:bg-white  hover:border-light-blue`}
      {...otherProps}
    >
      {children}
    </button>
  )
}

export default EditButton
