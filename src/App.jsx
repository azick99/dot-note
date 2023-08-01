import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router'
import { Provider } from 'react-redux'
import store from './store/store'
import { NavigationProvider } from './context/navigation.context'

// Created routes in router.js
// directroySlice located in root-nav-route

function App() {
  return (
    <Provider store={store}>
      <NavigationProvider>
        <RouterProvider router={router} />
      </NavigationProvider>
    </Provider>
  )
}

export default App
