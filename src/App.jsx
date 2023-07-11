import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router'
import { Provider } from 'react-redux'
import store from './store/store'

// created routes in router.js

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App
