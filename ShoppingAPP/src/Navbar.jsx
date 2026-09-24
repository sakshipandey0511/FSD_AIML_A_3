import React from 'react'

const Navbar = () => {
  return (
    <div className='Navbar'>
        <h2>My App</h2>
        <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/mycart">My Cart</a></li>
        <li><a href="/myorders">My Order</a></li>
        <li><a href="settings">Settings</a></li>
        <li><a href="/profile">My Profile</a></li>
        <li><a href="/logout">Logout</a></li>
      </ul>
    </div>
  )
}

export default Navbar