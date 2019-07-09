import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import sport from '../components/active-wear-9.jpeg'
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import ListGroup from 'react-bootstrap/ListGroup';
import Nav from 'react-bootstrap/Nav'
import Header from "./Header"
class Clothes extends Component {
    constructor() {
        super();
        this.state = {
            clothes:[]
        };
        this.componentDidMount = this.componentDidMount.bind(this)
      }

async componentDidMount(e){
    try{
        const respons = await fetch(`/products/clothes/${e.target.name}`)
        const clothes = await respons.json();
        this.setState({clothes:clothes})
        console.log(clothes)
    }
    catch(err){
        console.log(err)
    }
  
}


    render() {
        return (
            <div>
                <Header />
                <div className="Clothes-type">
                            <Nav.Item>
                                <Nav.Link name="men" onClick={this.componentDidMount}>MEN</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link name="women" onClick={this.componentDidMount}>WOMEN</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link name="kids" onClick={this.componentDidMount}>KIDS</Nav.Link>
                            </Nav.Item>
                </div>
            <div className="Clothes">
            {this.state.clothes.map(shoes=><div className="Card1"> <Card >
                    <Card.Img variant="top" src={`http://localhost:3001/${shoes.Picture}`} /> 
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
        )
}
}

export default Clothes;