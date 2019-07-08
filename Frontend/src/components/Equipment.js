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
             <Header />
                <div className="Equipment">
               {this.state.equipment.map(m=><div className="Card1"> <Card >
                    <Card.Img variant="top" src={`http://localhost:3001/${m.Picture}` } style={{border:'1px transparent',borderRadius:'25px'}} />
                    <Card.Body>
                        <Card.Title style={{color:'#FF4500',fontFamily: "Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
                        fontWeight: "bold", fontSize: "20pt"}}>
                        {m.Title}
                        </Card.Title>
                        <Card.Text style={{color:'grey',fontFamily: "Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif", fontSize: "10pt"}}>
                        {m.Description}
                        </Card.Text>
                        <ListGroup className="list-group-flush" style={{color:'rgb(48, 44, 44)',fontFamily: "Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
                        fontWeight: "bold", fontSize: "15pt"}}>
                            <ListGroupItem>{'$'+m.Price}</ListGroupItem>
                        </ListGroup>
                    </Card.Body>
                </Card></div>)}
                </div>
           
            </div>
        )
}
}

export default Equipment;