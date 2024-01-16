import React from 'react'
import { Link } from "react-router-dom"
import $ from "../style/Header.module.css"

function Header() {
  return (
    <header className={$.header}>
      <div className={$.logo}>Meetup App</div>
      
      <nav className={$.nav}>
        <Link className={$.link} to="">All Meetups            </Link> 
        <Link className={$.link} to="/favourite">My Favourite </Link> 
        <Link className={$.link} to="/new">Add Meetup         </Link>       
      </nav>
    </header>
  )
}

export default Header