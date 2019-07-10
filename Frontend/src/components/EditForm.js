import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import {Link} from 'react-router-dom'
import { createBrowserHistory } from 'history';
class EditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id:this.props.location.state.data.ID,
      category:this.props.location.state.data.Category ,
      type:this.props.location.state.data.Type ,
      picture:this.props.location.state.data.Picture ,
      title:this.props.location.state.data.Title,
      d: this.props.location.state.data.Description,
      price: this.props.location.state.data.Price,
      size: this.props.location.state.data.Size,
      selectedFile:''
    };
  }
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  editItem = async(event)=>{
    event.preventDefault();
    const body = new FormData();
    body.append('id',this.state.id)
    body.append('category',this.state.category)
    body.append('type',this.state.type)
    body.append('title',this.state.title)
    body.append('d',this.state.d)
    body.append('price',this.state.price)
    body.append('size',this.state.size)
    body.append('picture',this.state.picture)
    body.append('image',this.state.selectedFile)
   try {await axios.post( 'http://localhost:3001/products/edit/',
        body 
     )}
       catch(err)
       {
           console.log(err)
       }
       window.open(this.props.location.state.path, "_self");
  }
  onChangeHandler =  (e)=>{
    this.setState({
      selectedFile: e.target.files[0],
      picture: e.target.files[0].name
      
      
   })
  }
  render() {
    
    return (
      <div className="EditForm" >
        <Form>
          <h2>Edit Item</h2>
          <br />
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Category</Form.Label>
            <Form.Control
              as="select"
              name="category"
              value={this.state.category}
              onChange={this.handleChange}
            >
              <option />
              <option value="S">Shoes</option>
              <option value="C">Clothes</option>
              <option value="E">Equipment</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Type</Form.Label>
            <Form.Control
              as="select"
              name="type"
              value={this.state.type}
              onChange={this.handleChange}
            >
              <option />
              <option value="M">Male</option>
              <option value="F">Female</option>
              <option value="K">Kids</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Picture</Form.Label>
            <Form.Control
              type="picture"
              placeholder="Upload a Picture"
              name="picture"
              value={this.state.picture}
              onChange={this.handleChange}
            />
            <input  type="file"onChange={this.onChangeHandler} >
                                    </input>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="title"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="description"
              placeholder="Enter Description"
              name="d"
              value={this.state.d}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="price"
              placeholder="Enter Price"
              name="price"
              value={this.state.price}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Size</Form.Label>
            <Form.Control
              type="size"
              placeholder="Enter Size"
              value={this.state.size}
              name="size"
              onChange={this.handleChange}
            />
          </Form.Group>
       
          <Button variant="primary"  onClick={this.editItem}>
          {/* <WrappedLink to={this.props.location.state.path} style={{textDecoration:'none',color:'white'}} >  */}
      Update
          {/* </WrappedLink> */}
          </Button>
          
        
          <Link className="FormLink" to={this.props.location.state.path} > <Button variant="primary"  >
            Cancel
          </Button></Link>
        </Form>
      </div>
    );
  }
}

export default EditForm;
