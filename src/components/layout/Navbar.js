import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import Search from './Search'



const Navbar = () => {
    return (
        <nav className="nav-wrapper black -3"
       >
            <div className="container">
                <Link to='/' className="brand-logo">BookBook NYC</Link>
                <SignedInLinks />
                <SignedOutLinks />
            </div>


        </nav>
    )
}

export default Navbar