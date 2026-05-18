import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div>
      <nav className='sticky top-0 mt-12 max-w-6xl mx-auto'>
        <div className='flex justify-between items-center px-4 py-2'>
          <div>
            Claude 101
          </div>
          <ul className='flex items-center  gap-4'>
            <li className='text-sm font-medium text-heading hover:text-button transition-colors duration-300'>
              <Link href="#">Home</Link>
            </li>
            <li className='text-sm font-medium text-heading hover:text-button transition-colors duration-300'>
              <Link href="#">Project Structure</Link>
            </li>
            <li className='text-sm font-medium text-heading hover:text-button transition-colors duration-300'>
              <Link href="#">Workflows</Link>
            </li>
            <li className='text-sm font-medium text-heading hover:text-button transition-colors duration-300'>
              <Link href="#">About</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar