import React from 'react'
import { NavLink  } from 'react-router-dom'

const SignedInLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to ='/create'>Add Book</NavLink></li>
    {/*Will add functionality when relevant
            <li><NavLink to ='/'>Logout</NavLink></li>
            <li><NavLink to ='/' className='btn btn-floating pink lighten-1'>LD</NavLink></li>
    */}
        </ul>
    )
}

export default SignedInLinks