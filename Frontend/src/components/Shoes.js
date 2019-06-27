import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import sport from '../components/active-wear-9.jpeg'
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import ListGroup from 'react-bootstrap/ListGroup';
import Header from './Header'
import Nav from 'react-bootstrap/Nav'
class Shoes extends Component {
    constructor() {
        super();
        this.state = {
            men:[],
            kids:[],
            women:[],
            hidemen:null,
            hidewomen:null,
            hidekids:null
        };
      }
async componentDidMount(){
    try{
        const respons = await fetch('http://localhost:5000/products/shoes/men')
        const shoesMen = await respons.json();
        this.setState({men:shoesMen})
    }
    catch(err){
        console.log(err)
    }
    try{
        const respons1 = await fetch('http://localhost:5000/products/shoes/women')
        const shoesWomen = await respons1.json();
        this.setState({women:shoesWomen})
    }
    catch(err){
        console.log(err)
    }
    try{
        const respons2 = await fetch('http://localhost:5000/products/shoes/kids')
        const shoesKids = await respons2.json();
        this.setState({kids:shoesKids})
    }
    catch(err){
        console.log(err)
    }
}
showOrHideMen=event=>{
    this.setState({
        hidemen:!this.state.hidemen,
        hidewomen:null,
        hidekids:null
    })
}
showOrHideWomen=event=>{
    this.setState({
        hidemen:null,
        hidewomen:!this.state.hidewomen,
        hidekids:null
    })
}
showOrHidekids=event=>{
    this.setState({
        hidemen:null,
        hidewomen:null,
        hidekids:!this.state.hidekids
    })
}

    render() {
        return (
            <div>
                <Header />
                <div className="Shoes-type">
                            <Nav.Item>
                                <Nav.Link onClick={this.showOrHideMen}>Men</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link onClick={this.showOrHideWomen}>Women</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link onClick={this.showOrHidekids}>Kids</Nav.Link>
                            </Nav.Item>
                </div>
            <div>
               {this.state.hidemen?<div className='Shoes Men'>{this.state.men.map(m=><div className="Card1"> <Card >
                    <Card.Img variant="top" src={m.Picture }/>
                    <Card.Body>
                        <Card.Title>
                        {m.Title}
                        </Card.Title>
                        <Card.Text>
                        {m.Description}
                        </Card.Text>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>{'$'+m.Price}</ListGroupItem>
                        </ListGroup>
                    </Card.Body>
                </Card></div>)}</div>:null}
                {this.state.hidewomen?<div className='Shoes WoMen'>{this.state.women.map(m=><div className="Card1"> <Card >
                    <Card.Img variant="top" src={m.Picture }/>
                    <Card.Body>
                        <Card.Title>
                        {m.Title}
                        </Card.Title>
                        <Card.Text>
                        {m.Description}
                        </Card.Text>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>{'$'+m.Price}</ListGroupItem>
                        </ListGroup>
                    </Card.Body>
                </Card></div>)}</div>:null}
                {this.state.hidekids?<div className='Shoes Kids'> {this.state.kids.map(m=><div className="Card1"> <Card >
                    <Card.Img variant="top" src={m.Picture }/>
                    <Card.Body>
                        <Card.Title>
                        {m.Title}
                        </Card.Title>
                        <Card.Text>
                        {m.Description}
                        </Card.Text>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>{'$'+m.Price}</ListGroupItem>
                        </ListGroup>
                    </Card.Body>
                </Card></div>)}</div>:null}
               
                
            </div>
            </div>
        )
}
}

export default Shoes;