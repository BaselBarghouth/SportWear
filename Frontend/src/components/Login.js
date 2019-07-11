import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Header from './Header';
import {Link} from 'react-router-dom'
import { link } from 'fs';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            user:'',
            pass:'',
            p:""
        };
      }

      handleChange = (event)=>{
        this.setState({[event.target.name]:event.target.value})
      
      }

      handleSubmit=(event)=>{
          if(this.state.user === 'tarek' && this.state.pass === 'tarek' ){
                    
                   this.setState({p: '/adminpage'}, () => {
                       console.log(this.state.p)
                   })
          }
          else{
                this.setState({p: '/login'})
          }
      }
    render() {
        return (
            <div>
                <div className="background">
                <Header />
                <Form className="login">
                    <h2>Login</h2><br></br>
                    <Form.Group controlId="formBasicEmail">
                                <Form.Label>
                                    Email address
                                </Form.Label>
                                <Form.Control type="email" placeholder="Enter email" name="user" onChange={this.handleChange} />
                                
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                                    <Form.Label>
                                        Password
                                    </Form.Label>
                                    <Form.Control type="password" placeholder="Password" name="pass" onChange={this.handleChange} />
                    </Form.Group>
                    <Link to={this.state.p} >
                                    <Button variant="primary" onClick={this.handleSubmit} >
                                        Submit 
                                    </Button></Link>
                </Form>
            </div>
            </div>
        )
}
}

export default Login;