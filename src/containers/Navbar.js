import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = props => {
    return (
        <div 
            onClick={props.navToggler}
            className={`nav nav-${props.navToggle ? "open" : "closed"}`}>
            <Link className="nav-link" to={`/home`}>Home</Link>
            <Link className="nav-link" to={`/about`}>About</Link>
            <Link className="nav-link" to={`/contact`}>Contact</Link>
            <Link className="nav-link" to={`/projects`}>Projects</Link>
        </div>
    )
}

export default Navbar