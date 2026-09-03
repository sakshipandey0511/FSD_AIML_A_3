import React from 'react'

const navbar = () => {
  return (
    <div className='Navbar'>
        <h2>My App</h2>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>
    </div>
  )
}

export default navbar