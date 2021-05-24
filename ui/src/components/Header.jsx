import React from 'react'

export default function Header (){
    return (
        <nav>
            <a href="/">Home</a>
            {' | '}
            <a href="/#/issues">Issue List</a>
            {' | '}
            <a href="/#/report">Report</a>
        </nav>
    )
}

