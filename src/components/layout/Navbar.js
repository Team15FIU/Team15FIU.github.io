import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import CatalogLinks from './CatalogLinks'
import Search from './Search'



const Navbar = () => {
    return (
        <nav className="nav-wrapper grey darken-4"
       >
            <div className="container">
                <Link to='/' className="brand-logo">BookBook NYC</Link>
                <CatalogLinks />
                <SignedInLinks />
                <SignedOutLinks />
            </div>


        </nav>
    )
}

export default Navbar