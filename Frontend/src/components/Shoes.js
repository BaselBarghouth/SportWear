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

 
componentDidMount(){
    this.getShoes("kids");
}

getShoes = async (e) => {
    try{
        const respons = await fetch(`/products/shoes/${e}`)
        const shoes = await respons.json();
        this.setState({shoes:shoes})
    }
    catch(err){
        console.log(err)
    }
}

    render() {
        return (
            <div>
            <div className="background">
              <Header />
                <div className="Shoes-type">
                            <Nav.Item>
                                <Nav.Link name="MEN" onClick={()=>this.getShoes("men")}>MEN</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link name="WOMEN" onClick={()=>this.getShoes("women")}>WOMEN</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link name="KIDS" onClick={()=>this.getShoes("kids")}>KIDS</Nav.Link>
                            </Nav.Item>
                </div>
            <div className="Shoes">
            {this.state.shoes.map(shoes=><div className="Card1"> <Card >
                    <Card.Img variant="top" src={`http://localhost:3001/${shoes.Picture} `} />
                    <Card.Body>
                        <Card.Title>
                        {shoes.Title}
                        </Card.Title>
                        <Card.Text>
                        {shoes.Description}
                        </Card.Text>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>{'$'+shoes.Price}</ListGroupItem>
                        </ListGroup>
                    </Card.Body>
                </Card></div>)}
                
            </div>
            </div>
            </div>
        )
}
}

export default Shoes;