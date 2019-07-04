import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Header from './Header'
import {Link} from 'react-router-dom'

class AdminMenu extends Component {
    constructor() {
        super();
        this.state = {
        };
      }
    render() {
        return (
            <div>
                <Header />
            <div>

               <Nav defaultActiveKey="/home" as="ul">
                    <Nav.Item as="li">
                        <Nav.Link href="/home"><Link to="/adminmenu/clothes" >Clothes</Link></Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link eventKey="link-1"><Link to="/adminmenu/shoes" >Shoes</Link></Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link eventKey="link-2"><Link to="/adminmenu/equipment" >Equipment</Link></Nav.Link>
                    </Nav.Item>
                        <NavDropdown.Divider />
                        <Nav.Item as="li">
                        <Nav.Link eventKey="link-2"><Link to="/adminmenu/additem" >Add item</Link></Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
            </div>
        )
}
}

export default AdminMenu;