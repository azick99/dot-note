import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router'
import { Provider } from 'react-redux'
import store from './store/store'

// Created routes in router.js
// directroySlice located in root-nav-route

function App() {
  return (
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
  )
}

export default App
