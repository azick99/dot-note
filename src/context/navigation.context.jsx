import { createContext, useState } from 'react'

export const NavigationContext = createContext({
  isSidebarOpen: false,
  setIsSidebarOpen: () => {},
})

export const NavigationProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)


  const value = {
    isSidebarOpen,
    setIsSidebarOpen,
  }
  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  )
}
