import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import ListGroup from "react-bootstrap/ListGroup";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
class ClothesAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clothes: []
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  async componentDidMount(e) {
    try {
      const respons = await fetch(`/products/clothes/${e.target.name}`);
      const clothes = await respons.json();
      this.setState({ clothes: clothes });
      console.log(clothes);
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
    this.setState(this.state.clothes.splice(index, 1));
  };


  render() {
    return (
      <div>
        <div className="Clothes-type">
          <Nav.Item>
            <Nav.Link name="men" onClick={this.componentDidMount}>
              MEN
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link name="women" onClick={this.componentDidMount}>
              WOMEN
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link name="kids" onClick={this.componentDidMount}>
              KIDS
            </Nav.Link>
          </Nav.Item>
        </div>
        <div className="Clothes">
          {this.state.clothes.map((clothes, index) => (
            <div className="Card1">
              {" "}
              <Card>
                <Card.Img variant="top" src={`http://localhost:3001/${clothes.Picture}`} />
                <div className="Zoubala">
                  <div>
                    <Link>
                    <i
                      class="far fa-trash-alt red"
                      onClick={() => this.deleteItem(clothes.ID, index)}
                    />
                    </Link>
                  </div>
                  <div>
                  <Link to={{
                      pathname: '/adminpage/edit',
                      state: {
                        data: this.state.clothes[index],
                        path:'/adminmenu/clothes'
                      }
                    }}>
                  
                  <i class="far fa-edit red" ></i>
                  </Link>
                  </div>
                </div>
                <Card.Body>
                  <Card.Title>{clothes.Title}</Card.Title>
                  <Card.Text>
                  {clothes.Description}</Card.Text>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem>{"$" + clothes.Price}</ListGroupItem>
                  </ListGroup>
                </Card.Body>
              </Card>
            </div>
          ))}

         
        </div>
    
      </div>
    );
  }
}

export default ClothesAdmin;

