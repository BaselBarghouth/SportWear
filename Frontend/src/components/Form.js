import React,{Component} from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button' 
class Form1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'',
      lastname:'',
      email:'',
      message:''
    }
  this.handleChange=this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this)
  }
handleChange = (event)=>{
      this.setState({[event.target.name]:event.target.value})
    
    }

async handleSubmit (event){
      event.preventDefault();
      const {name, lastname, email, message} = this.state
     
      try{
        const form = await fetch('/form',
        {method:'POST',
      body:JSON.stringify({name, lastname, email, message}),
    headers:{'Content-Type':'application/json'}
  })}
      catch(err){
    console.log(err)
  }}
  render() {
      return (
        <div style={{width:'50%'}} >
        <Form onSubmit={this.handleSubmit}  >
            
              <Form.Label name="name" >First name</Form.Label>
              <Form.Control placeholder="First name" name="name"  onChange={this.handleChange}/>
              <Form.Label name="lastname" >Last name</Form.Label>
              <Form.Control placeholder="Last name" name="lastname"  onChange={this.handleChange}/>
              <Form.Label name="email" >Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" name="email" onChange={this.handleChange} />
              <Form.Label name="message">Message</Form.Label>
              <Form.Control as="textarea" rows="3" name="message" onChange={this.handleChange} />
              <Button variant="outline-primary" onClick={this.handleSubmit} >Submit</Button>
        </Form>
        </div>
      )
}
}

export default Form1;
