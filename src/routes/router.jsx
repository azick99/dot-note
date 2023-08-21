import { createBrowserRouter } from 'react-router-dom'
import SideNavigation from './root-nav-route/SideNavigation'
import ErrorPage from './root-nav-route/ErrorPage'
import Search from './search-route/Search'
import AllTeamspaces from './all-teamspaces-route/AllTeamspaces'
import Settings from './settings-route/Settings'
import General from './general-route/General'
import Upload from './upload-route/Upload'
import Trash from './trash-route/Trash'
import Todo from './todo-route/Todo'
import Markdown from './markdown-route/Markdown'
import Directory from './notes-route/Directory'
import Updated from './recent-route/Updated'
import Auth from './authentication-route/Auth'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <SideNavigation />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/auth', element: <Auth/> },
      { path: '/search', element: <Search /> },
      { path: '/updated', element: <Updated /> },
      { path: '/all', element: <AllTeamspaces /> },
      { path: '/settings', element: <Settings /> },
      { path: '/general', element: <General /> },
      { path: '/notes/:id', element: <Directory /> },
      { path: '/todo', element: <Todo /> },
      { path: '/markdown', element: <Markdown /> },
      { path: '/uploaded', element: <Upload /> },
      { path: '/trash', element: <Trash /> },
    ],
  },
])
