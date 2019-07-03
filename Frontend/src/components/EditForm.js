import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
class EditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id:this.props.location.aboutProps,
      category:this.props.location.aboutProps ,
      type:this.props.location.aboutProps ,
      picture:this.props.location.aboutProps ,
      title:this.props.location.aboutProps,
      d: this.props.location.aboutProps,
      price: this.props.location.aboutProps,
      size: this.props.location.aboutProps
    };
  }
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  addItem = async event => {
    event.preventDefault();
    const { id,category, type, picture, title, d, price, size } = this.state;
    await axios.post("/products/edit/", {
      id,
      category,
      type,
      picture,
      title,
      d,
      price,
      size
    });
  };
  
  render() {
    
    return (
      <div>
        <Form>
          <h2>Add Item</h2>
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
              <option value="E">Equipment</option>
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

          <Button variant="primary" type="Submit" onClick={this.addItem}>
            Edit
          </Button>
          <Button variant="primary" type="cancel" >
            Cancel
          </Button>
        </Form>
      </div>
    );
  }
}

export default EditForm;
