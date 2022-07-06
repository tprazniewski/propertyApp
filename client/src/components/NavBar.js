import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'


export const NavBar = () => {
  return (
        <ul className='nav-links'>
          <Link to='/'>
            <li >Home</li>
          </Link>
          <Link to='/users'>
            <li >Users</li>
          </Link>
          <Link to='/properties'>
            <li >Properties</li>
          </Link>
          <Link to='/auth'>
            <li >Authentication</li>
          </Link>
          <Link to='/users/new'>
            <li >Add new user</li>
          </Link>
          <Link to='/properties/new'>
            <li >Add new Property</li>
          </Link>
        </ul>
  )
}