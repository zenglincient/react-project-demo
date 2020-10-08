import React from 'react'
import { Link } from 'react-router-dom'

const NavLink = () => {
    return (
        <ul>
            <li>
                <Link to="/name">name</Link>
            </li>
            <li>
                <Link to="/">index</Link>
            </li>
        </ul>
    )
}

export default NavLink