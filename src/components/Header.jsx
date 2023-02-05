import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='header bg-gray-800 border-b py-4 border-gray-900'>
      <div className='custom-maxWidth flex justify-between'>
        <h1> <Link to='/'>Coiner</Link> </h1>
        <ul className='flex justify-between gap-5'>
            <li className='hover:text-gray-300 hover:underline'><Link to='/'>About</Link></li>
            <li className='hover:text-gray-300 hover:underline'><Link to='/'>Contact the Developer</Link></li>
        </ul>

      </div>
    </div>
  )
}

export default Header
