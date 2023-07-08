import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router'
// created routes in router.js
function App() {
  return <RouterProvider router={router} />
}

export default App
