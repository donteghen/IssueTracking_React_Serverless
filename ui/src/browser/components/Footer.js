import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaInstagram, FaPortrait, FaHeart} from 'react-icons/fa'

export default function Footer (){
   return (
    <div className='bg-light'>
    
    <div className="my-2 py-2 text-center">
    <a href="https://www.linkedin.com/in/donald-ticha-teghen-420283125/" target='_blank' style={{margin:'4px', padding:'2px'}}><FaLinkedin size={60} /></a>
    <a href="https://github.com/donteghen" target='_blank'  style={{margin:'4px', padding:'2px'}}  ><FaGithub size={60} /></a>
    <a href="https://donteghen.github.io/Portfolio/about" target='_blank'  style={{margin:'4px', padding:'2px'}}><FaPortrait size={60} /></a>
    <a href="https://instagram.com/donaldteghen/" target='_blank'  style={{margin:'4px', padding:'2px'}}><FaInstagram size={60} /></a>
    </div>
    <ul className="my-2 py-2 text-center">
        <Link to='/' style={{margin:'8px', padding:'4px', fontSize:'16px', textDecoration:'none'}} >Home</Link>
        <Link to='/issues' style={{margin:'8px', padding:'4px', fontSize:'16px', textDecoration:'none'}}>Issues</Link>
        <Link to='/report' style={{margin:'8px', padding:'4px', fontSize:'16px', textDecoration:'none'}}>Report</Link>
        <Link to='/about' style={{margin:'8px', padding:'4px', fontSize:'16px', textDecoration:'none'}}>About</Link>
    </ul>
   
    <div className='text-center'><p style={{ fontStyle:'italic', fontWeight:'bold'}}>Made with <FaHeart size={25} color='red' /> by Donald Teghen 2021</p></div>
</div>
   )
}