import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card'
import sport from '../components/active-wear-9.jpeg'
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import ListGroup from 'react-bootstrap/ListGroup';
import Nav from 'react-bootstrap/Nav'
import Header from "./Header"
import axios from 'axios';
import AdminMenu from './AdminMenu';
import { Link } from "react-router-dom";

class EquipmentAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            equipment:[]
        };
        this.componentDidMount = this.componentDidMount.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
      }

async componentDidMount(e){
    try{
        const respons = await fetch(`/products/equipment`)
        const equipment = await respons.json();
        this.setState({equipment:equipment})
        console.log(equipment)
    }
    catch(err){
        console.log(err)
    }
}
deleteItem = async(id,index) =>{
    console.log(id)
    const ID = id;
    try{
        const del = await fetch('/products/delete',{
            method:'POST',
            body : JSON.stringify({ID}),
            headers:{'Content-Type':'application/json'}
        })
    }
    catch(err){
        console.log(err)
    }
this.setState(this.state.equipment.splice(index,1))
}

    render() {
        return (
            <div>
            <div className="background3">
            <div className="Equipment">
            {this.state.equipment.map((equipment,index)=><div className="Card1"> <Card >
                    <Card.Img variant="top" src={`http://localhost:3001/${equipment.Picture}`}/>
                    <div className="Zoubala">
                  <div>
                      <Link>
                    <i
                      class="far fa-trash-alt red"
                      onClick={() => this.deleteItem(equipment.ID, index)}
                    />
                    </Link>
                  </div>
                  <div>
                  <Link to={{
                      pathname: '/adminpage/edit',
                      state: {
                        data: this.state.equipment[index],
                        path:'/adminmenu/equipment'
                      }
                    }}>
                  <i class="far fa-edit red"  ></i>

                  </Link>
                  </div>
                  
                </div>
                    <Card.Body>
                        <Card.Title>
                        {equipment.Title}
                        </Card.Title>
                        <Card.Text>
                        {equipment.Description}
                        </Card.Text>
                        <ListGroup className="list-group-flush" className="list-group-flush">
                            <ListGroupItem>{'$'+equipment.Price}</ListGroupItem>
                        </ListGroup>
                    </Card.Body>
                </Card></div>)}
                
            </div>
            </div>
            </div>
        )
}
}

export default EquipmentAdmin;