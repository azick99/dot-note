import { useState } from 'react'

const HeaderDropdown = ({ photoUrl, handleSignOut }) => {
  const [isPhotoDropdownOpen, setIsPhotoDropdownOpen] = useState(false)

  const toggleDropdown = () => {
    setIsPhotoDropdownOpen(!isPhotoDropdownOpen)
  }

  return (
    <div className="relative">
      <button
        className="cursor-pointer"
        aria-label="User menu"
        onClick={toggleDropdown}
      >
        <img
          src={photoUrl}
          alt="User Avatar"
          className="w-10 h-10 rounded-full shadow-lg"
        />
      </button>
      {isPhotoDropdownOpen && (
        <div className="absolute top-14 -right-6 w-20 bg-white border border-gray-300 rounded-lg p-2 space-y-2 z-10 ">
          <button onClick={handleSignOut} type="button" aria-label="Sign out">
            Sign out
          </button>
          <button onClick={toggleDropdown} type="button">
            Profile
          </button>
        </div>
      )}
    </div>
  )
}

export default HeaderDropdown
