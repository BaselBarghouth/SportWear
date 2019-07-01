import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card'
import sport from '../components/active-wear-9.jpeg'
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import ListGroup from 'react-bootstrap/ListGroup';
import Nav from 'react-bootstrap/Nav'
class Shoes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shoes:[]
        };
        this.componentDidMount = this.componentDidMount.bind(this)
      }

async componentDidMount(e){
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
              
                <div className="Shoes-type">
                            <Nav.Item>
                                <Nav.Link name="men" onClick={this.componentDidMount}>Men</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link name="women" onClick={this.componentDidMount}>Women</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link name="kids" onClick={this.componentDidMount}>Kids</Nav.Link>
                            </Nav.Item>
                </div>
            <div className="Shoes">
            {this.state.shoes.map(shoes=><div className="Card1"> <Card >
                    <Card.Img variant="top" src={shoes.Picture}/>
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

export default Shoes;