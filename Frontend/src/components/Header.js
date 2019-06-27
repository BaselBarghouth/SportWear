import React from 'react';
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Navbar from 'react-bootstrap/Navbar'
import NavbarBrand from 'react-bootstrap/NavbarBrand'
class Header extends React.Component{
  constructor(props) {
    super(props);
   
  }

render(){
  return (
    <div>
      <Navbar bg="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">About</Nav.Link>
      <NavDropdown title="Products" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Clothes</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Shoes</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Equipments</NavDropdown.Item>
       
      
      </NavDropdown>
      <Nav.Link href="#link">Contact Us</Nav.Link>

      <Nav.Link href="#home">Login</Nav.Link>

    </Nav>
   
  </Navbar.Collapse>
</Navbar>
            
    </div>
  );
}
}
export default Header;
