import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import ListGroup from 'react-bootstrap/ListGroup';
import Header from "./Header"
class Equipment extends Component {
    constructor() {
        super();
        this.state = {
            equipment:[]
        };
      }
async componentDidMount(){
    try{
        const respons = await fetch(`/products/equipment`)
        const equipment = await respons.json();
        this.setState({equipment:equipment})
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
                <div className="Equipment">
               {this.state.equipment.map(m=><div className="Card1"> <Card >
                    <Card.Img variant="top" src={`http://localhost:3001/${m.Picture}` } />
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
                </Card></div>)}
                </div>
                </div>
            </div>
        )
}
}

export default Equipment;