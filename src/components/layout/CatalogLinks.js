import React from 'react'
import { NavLink  } from 'react-router-dom'

const CatalogLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to ='/catalog'>Catalog</NavLink></li>
        </ul>
    )
}

export default CatalogLinks