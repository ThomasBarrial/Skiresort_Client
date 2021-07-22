import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className="flex w-full justify-between sticky top-0 bg-white py-7 px-10">
      <nav className="font-Open w-full justify-end text-xl text-darkBlue  list-none font-bold flex">
        <Link to="/">
          <li className="mr-6">Home</li>
        </Link>
        <li className="mr-6">Search</li>
        <Link to="/settings">
          <li>Settings</li>
        </Link>
      </nav>
    </div>
  )
}

export default Header
