import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header (){
    return (
        <nav>
            <NavLink exact to="/">Home</NavLink>
            {' | '}
            <NavLink to="/issues">Issue List</NavLink>
            {' | '}
            <NavLink to="/report">Report</NavLink>
        </nav>
    )
}

