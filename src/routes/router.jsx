import { createBrowserRouter } from 'react-router-dom'
import SideNavigation from './root-nav-route/SideNavigation'
import ErrorPage from './root-nav-route/ErrorPage'
import MainSection from './notes-route/Notes'
import Search from './search-route/Search'
import AllTeamspaces from './all-teamspaces-route/AllTeamspaces'
import Settings from './settings-route/Settings'
import General from './general-route/General'
import Direactory from './directories/Direactory'
import Upload from './upload-route/Upload'
import Trash from './trash-route/Trash'
import Recent from './recent-route/Recent'
import Notes from './notes-route/Notes'
import Todo from './todo-route/Todo'
import Markdown from './markdown-route/Markdown'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <SideNavigation />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/search', element: <Search /> },
      { path: '/recent', element: <Recent /> },
      { path: '/all', element: <AllTeamspaces /> },
      { path: '/settings', element: <Settings /> },
      { path: '/general', element: <General /> },
      { path: '/notes', element: <Notes /> },
      { path: '/notes/:directory', element: <Direactory /> },
      { path: '/todo', element: <Todo /> },
      { path: '/markdown', element: <Markdown /> },
      { path: '/uploaded', element: <Upload /> },
      { path: '/trash', element: <Trash /> },
    ],
  },
])
