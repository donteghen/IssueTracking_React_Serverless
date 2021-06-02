import React from 'react'
import { Link, } from 'react-router-dom'
import { Navbar, Nav, } from 'react-bootstrap'
import AuthNav from './AuthNav'
export default function Header (){
    return (
        <div style={{boxShadow:'0 4px 6px -6px black'}}>
        <Navbar expand='lg' className="bg-light justify-content-between">
            <Navbar.Brand className='mx-1 px-1'>Issue Tracker</Navbar.Brand>
            <Navbar.Toggle aria-controls='navbar-nav'></Navbar.Toggle>
            <Navbar.Collapse id='navbar-nav'>
                <Nav className="justify-content-end" activeKey="/home">
                <Nav.Item>
                <Link to='/' style={{textDecoration:'none', padding:'8px', margin:'2px', color:'#0275d8'}}>Home</Link>
                </Nav.Item>
                <Nav.Item>
                <Link to='/issues' style={{textDecoration:'none', padding:'8px', margin:'2px', color:'#0275d8'}}>Issue List</Link>
                </Nav.Item>
                <Nav.Item>
                <Link to='/report' style={{textDecoration:'none', padding:'8px', margin:'2px', color:'#0275d8'}}>Report</Link> 
                </Nav.Item>
                <Nav.Item>
                <Link to='/about' style={{textDecoration:'none', padding:'8px', margin:'2px', color:'#0275d8'}}>About</Link>   
                </Nav.Item>
                <Nav.Item><AuthNav /></Nav.Item>
            </Nav>
            </Navbar.Collapse>
            
        </Navbar>
        <>
  
</>
        </div>

    )
}

