import React, { Component } from "react";
import PropTypes from "prop-types";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";
import NavbarBrand from "react-bootstrap/NavbarBrand";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import sport from "../components/Sports_Logo.png";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Header">
        <Navbar expand="lg" className="NavBar navbar-dark bg-dark" 
        >
        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}} >
          <div>
          <Link to="/">
              <Image src={sport} className="homeImage"  />
          </Link>
          </div>
          <div className="Rest" style={{marginLeft:"900px"}} >
            <Navbar.Toggle aria-controls="basic-navbar-nav"  />
            <Navbar.Collapse id="basic-navbar-nav1"  >
              <Nav className="mr-auto">
                <Nav.Link >
                  <HashLink smooth to="/#about" style={{color:'lightgrey'}} >About</HashLink>
                </Nav.Link>
                 <NavDropdown title="Products" id="basic-nav-dropdown">
                  <NavDropdown.Item>
                    <Link to="/products/shoes" style={{color:'black'}} >Shoes</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/products/clothes" style={{color:'black'}} >Clothes</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/products/equipment" style={{color:'black'}}>Equipments</Link>
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link>
                  <HashLink smooth to="/#contact" style={{color:'lightgrey'}}>Contact Us</HashLink>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
          </div>
        </Navbar>
      </div>
    );
  }
}
export default Header;
//   render() {
//     return (
//       <div className="Header" style={{backgroundColor:'rgb(48, 44, 44)'}} >
//         <Navbar  expand="lg" className="NavBar">
//           <Link to="/">
           
//             <Image src={sport} className="homeImage" />
//           </Link>
//           <div className="Rest">
//             <Navbar.Toggle aria-controls="basic-navbar-nav" />
//             <Navbar.Collapse id="basic-navbar-nav1">
//               <Nav className="mr-auto">
//                 <Nav.Link>
//                   <HashLink smooth to="/#about">About</HashLink>
//                 </Nav.Link>
//                 <NavDropdown title="Products" id="basic-nav-dropdown">
//                   <NavDropdown.Item>
//                     <Link to="/products/shoes">Shoes</Link>
//                   </NavDropdown.Item>
//                   <NavDropdown.Item>
//                     <Link to="/products/clothes">Clothes</Link>
//                   </NavDropdown.Item>
//                   <NavDropdown.Item>
//                     <Link to="/products/equipment">Equipments</Link>
//                   </NavDropdown.Item>
//                 </NavDropdown>
//                 <Nav.Link>
//                   <HashLink smooth to="/#contact">Contact Us</HashLink>
//                 </Nav.Link>
//                 {/* <Nav.Link href="#home">
//                   <Link to="/login">Login</Link>
//                 </Nav.Link> */}
//               </Nav>
//             </Navbar.Collapse>
//           </div>
//         </Navbar>
//       </div>
//     );
//   }
// }
// export default Header;
