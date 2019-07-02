import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios';

class Create extends Component {
    constructor(props) {
        super();
        this.state={
            category:'',
            type:'',
            picture:'',
            title:'',
            d:'',
            price:'',
            size:'' 
               }
       
      }
      handleChange = (event)=>{
        this.setState({[event.target.name]:event.target.value})
      
      }
   addItem= async(event) =>{ 
    event.preventDefault();
    const {category,type,picture,title,d,price,size} = this.state     
        await axios.post('/adminmenu/additem',{category,type,picture,title,d,price,size})
    }
    render() {
        return (
            <div>
                    <Form>
                    <h2>Add Item</h2><br></br>
                    <Form.Group controlId="exampleForm.ControlSelect1" >
                                        <Form.Label>Category</Form.Label>
                                        <Form.Control as="select" name="category" value = {this.state.category} onChange={this.handleChange}  >
                                            <option></option>
                                            <option value="S" >Shoes</option>
                                            <option value="C" >Clothes</option>
                                            <option value="E" >Equipment</option>
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                        <Form.Label>Type</Form.Label>
                                        <Form.Control as="select" name="type" value = {this.state.type} onChange={this.handleChange}  >
                                            <option></option>     
                                            <option value = "M">Male</option>
                                            <option value = "F">Female</option>
                                            <option value = "E">Equipment</option>
                                        </Form.Control>
                                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                                <Form.Label>
                                    Picture
                                </Form.Label>
                                <Form.Control type="picture" placeholder="Upload a Picture" name="picture" onChange={this.handleChange}/>
                                
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                                    <Form.Label>
                                        Title
                                    </Form.Label>
                                    <Form.Control type="title" placeholder="Enter Title" name="title" onChange={this.handleChange}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                                    <Form.Label>
                                        Description
                                    </Form.Label>
                                    <Form.Control type="description" placeholder="Enter Description" name="d" onChange={this.handleChange}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                                    <Form.Label>
                                        Price
                                    </Form.Label>
                                    <Form.Control type="price" placeholder="Enter Price" name="price" onChange={this.handleChange}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                                    <Form.Label>
                                        Size
                                    </Form.Label>
                                    <Form.Control type="size" placeholder="Enter Size" name="size" onChange={this.handleChange}/>
                    </Form.Group>
                    
                                    <Button variant="primary" type="Submit"onClick={this.addItem} >
                                        Add
                                    </Button>
                                    
                </Form>
            </div>
        )
}
}

export default Create;