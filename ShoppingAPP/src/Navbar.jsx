import React from 'react'

const Navbar = () => {
  return (
    <div className='Navbar'>
        <h2>My App</h2>
        <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">My Cart</a></li>
        <li><a href="#">My Order</a></li>
        <li><a href="#">Settings</a></li>
        <li><a href="#">My Profile</a></li>
        <li><a href="#">Logout</a></li>
      </ul>
    </div>
  )
}

export default Navbar