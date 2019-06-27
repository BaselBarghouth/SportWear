import React,{Component} from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
class Form1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name:'',
      lastname:'',
      email:'',
      messege:''
    }}
    handleChangeName = (event) => {
      this.setState({name:event.target.value}, () => {
        console.log(this.state.value)
      });
    }
    handleChangeLastName = (event) => {
      this.setState({lastname:event.target.value}, () => {
        console.log(this.state.value)
      });
    }
    handleChangeEmail = (event) => {
      this.setState({email:event.target.value}, () => {
        console.log(this.state.value)
      });
    }
    handleChangeMessege = (event) => {
      this.setState({messege:event.target.value}, () => {
        console.log(this.state.value)
      });
    }
  render() {
      return (
        <div>
              <Form.Label>First name</Form.Label>
              <Form.Control placeholder="First name"  value={this.state.name} onChange={this.handleChangeName}/>
              <Form.Label>Last name</Form.Label>
              <Form.Control placeholder="Last name"  value={this.state.lastname} onChange={this.handleChangeLastName}/>
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" value={this.state.email} onChange={this.handleChangeEmail} />
              <Form.Label>Messege</Form.Label>
              <Form.Control as="textarea" rows="3" value={this.state.messege} onChange={this.handleChangeMessege} />
              <Button variant="outline-primary">Submit</Button>
        </div>
      )
}
}

export default Form1;
