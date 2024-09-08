import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='fixed top-0 left-0 w-full bg-gray-800 p-5 text-white flex justify-between items-center border-b border-gray-700 z-50'>
      <nav className='w-full max-w-7xl mx-auto flex justify-between items-center'>
        {/* Logo or title */}
        <Link to='/'><p className='text-xl font-bold'>Sample Project</p></Link>
        
        {/* Navigation links */}
        <ul className='flex space-x-8'>
          <li>
            <Link to='/' className='hover:text-gray-300 transition-colors duration-200'>
              View ALL
            </Link>
          </li>
          <li>
            <Link to='/add' className='hover:text-gray-300 transition-colors duration-200'>
              ADD
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
