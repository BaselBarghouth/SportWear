import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import Header from './Header';


class Login extends Component {
    constructor() {
        super();
        this.state = {
        };
      }
    render() {
        return (
            <div>
                <Header />
                <Form>
                    <h2>Login</h2><br></br>
                    <Form.Group controlId="formBasicEmail">
                                <Form.Label>
                                    Email address
                                </Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                                    <Form.Label>
                                        Password
                                    </Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    
                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                </Form>
            </div>
        )
}
}

export default Login;