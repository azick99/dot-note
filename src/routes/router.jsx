import { createBrowserRouter } from 'react-router-dom'
import SideNavigation from './root-nav-route/SideNavigation'
import ErrorPage from './root-nav-route/ErrorPage'
import MainSection from './main-route/MainSection'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <SideNavigation />,
    errorElement: <ErrorPage />,
    children: [{ path: '/main', element: <MainSection /> }],
  },
])
