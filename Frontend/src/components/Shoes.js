import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card'
import sport from '../components/active-wear-9.jpeg'
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import ListGroup from 'react-bootstrap/ListGroup';
import Nav from 'react-bootstrap/Nav'
import Header from "./Header"
class Shoes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shoes:[]
        };
      
      }

 getShoes= async(e)=>
{
    try{
        const respons = await fetch(`/products/shoes/${e.target.name}`)
        const shoes = await respons.json();
        this.setState({shoes:shoes})
        console.log(shoes)
    }
    catch(err){
        console.log(err)
    }
}


    render() {
        return (
            <div>
              <Header />
                <div className="Shoes-type">
                            <Nav.Item>
                                <Nav.Link name="MEN" onClick={this.getShoes} style={{color:'grey',fontFamily: "Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
                                fontWeight: "bold", fontSize: "13pt"}}>MEN</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link name="WOMEN" onClick={this.getShoes} style={{color:'grey',fontFamily: "Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
                                fontWeight: "bold", fontSize: "13pt"}}>WOMEN</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link name="KIDS" onClick={this.getShoes} style={{color:'grey',fontFamily: "Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
                                fontWeight: "bold", fontSize: "13pt"}}>KIDS</Nav.Link>
                            </Nav.Item>
                </div>
            <div className="Shoes">
            {this.state.shoes.map(shoes=><div className="Card1"> <Card >
                    <Card.Img variant="top" src={`http://localhost:3001/${shoes.Picture} `}style={{border:'1px transparent',borderRadius:'25px'}} />
                    <Card.Body>
                        <Card.Title style={{color:'#FF4500',fontFamily: "Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
                        fontWeight: "bold",
                        fontSize: "20pt"}}>
                        {shoes.Title}
                        </Card.Title>
                        <Card.Text style={{color:'grey',fontFamily: "Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif", fontSize: "10pt"}}>
                        {shoes.Description}
                        </Card.Text>
                        <ListGroup className="list-group-flush" style={{color:'rgb(48, 44, 44)',fontFamily: "Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
                        fontWeight: "bold", fontSize: "15pt"}}>
                            <ListGroupItem>{'$'+shoes.Price}</ListGroupItem>
                        </ListGroup>
                    </Card.Body>
                </Card></div>)}
                
            </div>
            </div>
        )
}
}

export default Shoes;