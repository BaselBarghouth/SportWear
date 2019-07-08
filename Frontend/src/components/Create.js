import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import {Link} from 'react-router-dom'
class Create extends Component {
    constructor(props) {
        super();
        this.state={
            category:'',
            type:'',
            title:'',
            d:'',
            price:'',
            size:'' ,
            selectedFile:''
               }
       
      }
handleChange = (event)=>{
        this.setState({[event.target.name]:event.target.value})
      
      }
onChangeHandler =  (e)=>{
        this.setState({
           selectedFile: e.target.files[0]
          
       })
}
addItem = async(event)=>{
    event.preventDefault();
    const body = new FormData();
    body.append('category',this.state.category)
    body.append('type',this.state.type)
    body.append('title',this.state.title)
    body.append('d',this.state.d)
    body.append('price',this.state.price)
    body.append('size',this.state.size)
    body.append('image',this.state.selectedFile)
   try {await axios.post( '/adminmenu/additem',
        body 
     )}
       catch(err)
       {
           console.log(err)
       }
    }
       
componentDidMount(){
    console.log(this.props)
}

    
    render() {
        return (
            <div style={{width:"75%", margin:"auto"}}>
                    <Form>
                    <h2 style={{color:'#FF4500',fontFamily: "Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
                    fontWeight: "bold", fontSize: "20pt"}}>ADD ITEM</h2><br></br>
                    <Form.Group controlId="exampleForm.ControlSelect1">
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
                             
                              
                                <input  type="file"onChange={this.onChangeHandler} >
                                    </input>
                                    
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
                    <Link to ={this.props.location.state.path} style={{textDecoration:'none',color:'white',paddingLeft:"10px"}} >
                                   
                                    <Button variant="primary" type="Submit"onClick={this.addItem} >
                                        Add
                                    </Button>
                                  
                                   </Link>
                                 
                                    <Link to ={this.props.location.state.path} style={{textDecoration:'none',color:'white',paddingLeft:"10px"}} >
                                    <Button variant="primary" type="cancel" >
                                        Cancel
                                    </Button></Link>
                                  
                                    
                </Form>
            </div>
        )
}
}

export default Create;