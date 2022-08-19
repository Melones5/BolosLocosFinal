import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './NavBar.css'
import imgLogo from '../assets/logo2-modified.png'

function NavBar() {
  return (
    <div>
      <Navbar className='navBackground' bg="dark" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="/" className='text-white'>
            <img src={imgLogo} widht="40" height="40"/> Bolos Locos
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className='burger'/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto navbar-header">
              <Link exact="true" to="/" className="py-1 px-2 cursor-pointer" activeClassName="active">Inicio</Link>
              <Link exact="true" to="/about" className="py-1 px-2 cursor-pointer" activeClassName="active">Quienes somos</Link>
              <Link exact="true" to="/galery" className="py-1 px-2 cursor-pointer" activeClassName="active">Galeria</Link>
              <Link exact="true" to="/contact" className="py-1 px-2 cursor-pointer" activeClassName="active">Contáctenos</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar
