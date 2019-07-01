import React,{Component} from 'react';
import PropTypes from 'prop-types';
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Navbar from 'react-bootstrap/Navbar'
import NavbarBrand from 'react-bootstrap/NavbarBrand'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import sport from '../components/active-wear-9.jpeg'
import {Link} from 'react-router-dom'

class Header extends React.Component{
  constructor(props) {
    super(props);
   
  }

render(){
  return (
    <div className="Header">
    
      <Navbar bg="light" expand="lg" className="NavBar">
    ` <Link to="/"> <Image src={sport} roundedCircle className='homeImage'/></Link>
     <div className="Rest">
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav1">
                <Nav className="mr-auto">
                  <Nav.Link href="#home">About</Nav.Link>
                      <NavDropdown title="Products" id="basic-nav-dropdown">
                          <NavDropdown.Item><Link to="/products/shoes">Shoes</Link></NavDropdown.Item>
                          <NavDropdown.Item ><Link to="/products/clothes">Clothes</Link></NavDropdown.Item>
                          <NavDropdown.Item ><Link to="/products/equipment">Equipments</Link></NavDropdown.Item>
                      </NavDropdown>
                  <Nav.Link href="#link">Contact Us</Nav.Link>
                  <Nav.Link href="#home">Login</Nav.Link>
                </Nav>
              </Navbar.Collapse>
      </div>
      </Navbar>
            
    </div>
  );
}
}
export default Header;
