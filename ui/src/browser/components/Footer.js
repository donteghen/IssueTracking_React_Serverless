import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";
export default function Footer (){
   return (
    <footer>
    <div className="social">
    <a href="#"><FontAwesomeIcon icon='instagram'/></a>
    <a href="#"><FontAwesomeIcon icon='snapchat'/></a>
    <a href="#"><FontAwesomeIcon icon='twitter'/></a>
    <a href="#"><FontAwesomeIcon icon='facebook-square'/></a>
    </div>
    <ul className="list-inline">
        <Link to='/' className="list-inline-item">Home</Link>
        <Link to='/issues' className="list-inline-item">Issues</Link>
        <Link to='/report' className="list-inline-item">Report</Link>
        <Link to='/about' className="list-inline-item">About</Link>
    </ul>
    <p className="copyright">Company Name © 2021</p>
</footer>
   )
}