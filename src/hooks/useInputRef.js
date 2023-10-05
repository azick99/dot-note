import { useRef } from 'react'

export const useInputRef = () => {
  const inputRef = useRef(null)

  const onFocusInput = () => {
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus()
      }
    }, 0)
  }
  return [inputRef, onFocusInput]
}
