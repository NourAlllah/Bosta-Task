import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const Header = () => {

  return (
  
    <Navbar collapseOnSelect expand="lg" className="nav_background"  data-bs-theme="light">
      <Container>
        <img src={"./bosta.webp"}  alt='bosta' className='logo_bosta'/>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav >

            <NavDropdown title="Products" id="collapsible-nav-dropdown" className='header_hover'> 
              <NavDropdown.Item href="https://bosta.co/en-eg/solutions">Solutions</NavDropdown.Item>
              <NavDropdown.Item href="https://bosta.co/en-eg/dashboard">Dashboard </NavDropdown.Item>
              <NavDropdown.Item href="https://bosta.co/en-eg/mobile">Mobile App</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Integrations" id="collapsible-nav-dropdown" className='header_hover'>
              <NavDropdown.Item href="https://bosta.co/en-eg/merged-integrations?plugin=shopify">Shopify</NavDropdown.Item>
              <NavDropdown.Item href="https://bosta.co/en-eg/merged-integrations?plugin=woocommerce">WooCommerce</NavDropdown.Item>
              <NavDropdown.Item href="https://bosta.co/en-eg/integrations">Custom APIS</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Use Cases" id="collapsible-nav-dropdown"  className='header_hover'>
              <NavDropdown.Item href="https://bosta.co/en-eg/smes">Businesses</NavDropdown.Item>
              <NavDropdown.Item href="https://bosta.co/en-eg/business">SMEs</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="https://bosta.co/en-eg/pricing" className='header_hover underline_h' >Pricing</Nav.Link>
            <Nav.Link href="https://bosta.co/en-eg/blog" className='header_hover underline_h'>Blog</Nav.Link>

          </Nav>
          <Nav>

            <NavDropdown title="AR" id="collapsible-nav-dropdown" className='header_hover'> 
              <NavDropdown.Item href="https://bosta.co/ar-eg/blog" >Arabic</NavDropdown.Item>
              <NavDropdown.Item href="https://bosta.co/en-eg/blog">English </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link  href="https://business.bosta.co/signin" className='sign_in underline_h'>Sign In</Nav.Link>
            <Nav.Link  href="https://bosta.co/en-eg/signup" className='sign_up underline_h background_red'>Sign Up</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  )
}

export default Header