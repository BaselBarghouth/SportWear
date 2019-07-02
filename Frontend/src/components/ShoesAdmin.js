import React, { Component } from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import sport from "../components/active-wear-9.jpeg";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import ListGroup from "react-bootstrap/ListGroup";
import Nav from "react-bootstrap/Nav";
import Header from "./Header";
import axios from "axios";
import { Link } from "react-router-dom";
import EditForm from "./EditForm";
class ShoesAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shoes: [],
      edit: null,
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  async componentDidMount(e) {
    try {
      const respons = await fetch(`/products/shoes/${e.target.name}`);
      const shoes = await respons.json();
      this.setState({ shoes: shoes });
      console.log(shoes);
    } catch (err) {
      console.log(err);
    }
  }
  deleteItem = async (id, index) => {
    console.log(id);
    const ID = id;
    try {
      const del = await fetch("/products/delete", {
        method: "POST",
        body: JSON.stringify({ ID }),
        headers: { "Content-Type": "application/json" }
      });
    } catch (err) {
      console.log(err);
    }
    this.setState(this.state.shoes.splice(index, 1));
  };

  selectItemToEdit = (item,event) => {
      this.setState({
          edit: item
      })
      console.log('shoescom',item)
  }

  render() {
    return (
      <div>
        <div className="Shoes-type">
          <Nav.Item>
            <Nav.Link name="men" onClick={this.componentDidMount}>
              Men
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link name="women" onClick={this.componentDidMount}>
              Women
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link name="kids" onClick={this.componentDidMount}>
              Kids
            </Nav.Link>
          </Nav.Item>
        </div>
        <div className="Shoes">
          {this.state.shoes.map((shoes, index) => (
            <div className="Card1">
              {" "}
              <Card>
                <Card.Img variant="top" src={shoes.Picture} />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "40px",
                    margin: "auto",
                    justifyContent: "space-between"
                  }}
                >
                  <div>
                    <i
                      class="far fa-trash-alt"
                      onClick={() => this.deleteItem(shoes.ID, index)}
                    />
                  </div>
                  <div>
                    <button onClick={(event) => {
                        event.preventDefault();
                        this.selectItemToEdit(shoes)
                    }}>Edit </button>
                  </div>
                </div>
                <Card.Body>
                  <Card.Title>{shoes.Title}</Card.Title>
                  <Card.Text>{shoes.Description}</Card.Text>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem>{"$" + shoes.Price}</ListGroupItem>
                  </ListGroup>
                </Card.Body>
              </Card>
            </div>
          ))}

         
        </div>
        {
              this.state.edit !== null ? <EditForm data={this.state.edit} />: null
          }
      </div>
    );
  }
}

export default ShoesAdmin;
