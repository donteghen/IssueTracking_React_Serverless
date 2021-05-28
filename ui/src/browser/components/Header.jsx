import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import {NavbarBrand, Navbar, Nav, NavItem} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
export default function Header (){
    return (
        <Navbar bg='light' expand='lg' className='d-flex'>
            <Navbar.Brand className='justify-content-start mx-1 px-1'>Issue Tracker</Navbar.Brand>
            <Navbar.Toggle aria-controls='navbar-nav'></Navbar.Toggle>
            <Navbar.Collapse id='navbar-nav' className='d-flex'>
                <Nav className='d-flex justify-content-middle'>
                    <LinkContainer to='/' className='mx-2 px-2'>
                        <NavItem>Home</NavItem>
                    </LinkContainer>
                    <LinkContainer to='/issues' className='mx-2 px-2'>
                        <NavItem>Issues List</NavItem>
                    </LinkContainer>
                    <LinkContainer to='/report' className='mx-2 px-2'>
                        <NavItem>Report</NavItem>
                    </LinkContainer>
                    <LinkContainer to='/about' className='mx-2 px-2'>
                        <NavItem>About</NavItem>
                    </LinkContainer>
                </Nav>
                <Nav className='d-flex justify-content-end' >
                    <LinkContainer to='/' >
                        <NavItem>Home</NavItem>
                    </LinkContainer>
                    <LinkContainer to='/issues' >
                        <NavItem>Issues List</NavItem>
                    </LinkContainer>
                    <LinkContainer to='/report' >
                        <NavItem>Report</NavItem>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

