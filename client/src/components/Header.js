import React from 'react'
import './Header.css'
import {NavBar} from './NavBar'

export const Header = () => {
  return (
    <header className="main-header">
      <nav>
        <NavBar />
      </nav>
    </header>
  )
}
