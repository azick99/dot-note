import { FaClipboardList } from 'react-icons/fa'
import { FcSearch, FcClock, FcSettings } from 'react-icons/fc'
//readony direcories
export const directories = [
  {
    id: 1,
    title: 'Search',
    icon: <FcSearch className="w-5 h-5" />,
    link: 'search',
  },
  {
    id: 2,
    title: 'All Teamspaces',
    icon: <FaClipboardList className="w-5 h-5" />,
    link: 'all',
  },
  {
    id: 3,
    title: 'Updated',
    icon: <FcClock className="w-5 h-5" />,
    link: 'recent',
  },
  {
    id: 4,
    title: 'Settings',
    icon: <FcSettings className="w-5 h-5" />,
    link: 'settings',
  },
]
