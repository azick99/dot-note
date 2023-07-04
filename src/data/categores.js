import { addNotes, allNotes, profileUser, recentNotes, search, user } from "../assets/btn-icons"


let categoryId = 0

export const categories = [
    {
        id: categoryId++,
        icon: addNotes,
        title:'Add Notes'
    },
    {
        id: categoryId++,
        icon: allNotes,
        title:'All Notes'
    },
    {
        id: categoryId++,
        icon: recentNotes,
        title:'Recent Notes'
    },

    {
        id: categoryId++,
        icon: search,
        title:'Search'
    },
    {
        id: categoryId++,
        icon: user,
        title:'Sign Up'
    },
    {
        id: categoryId++,
        icon: profileUser,
        title:'Login'
    },


] 