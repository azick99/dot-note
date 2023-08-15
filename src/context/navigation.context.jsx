import { createContext, useState } from 'react'

export const NavigationContext = createContext({
  isSidebarOpen: false,
  isChangesSaved: false,
  prevContentId: '1',
  setPrevContentId: () => {},
  setIsSidebarOpen: () => {},
  setIsChangesSaved: () => {},
})

export const NavigationProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isChangesSaved, setIsChangesSaved] = useState(false)
  const [prevContentId, setPrevContentId] = useState('1')

  
  const value = {
    isSidebarOpen,
    isChangesSaved,
    prevContentId,
    setPrevContentId,
    setIsSidebarOpen,
    setIsChangesSaved,
  }
  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  )
}
