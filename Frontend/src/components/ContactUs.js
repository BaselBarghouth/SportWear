import React,{Component} from 'react';
import Form from './Form';
import ContactInfo from './ContactInfo';

class ContactUs extends Component {
  constructor(props) {
    super(props);
  }
  render() {
      return (
        <div>
              <ContactInfo />
              <Form />
        </div>
      )
}
}

export default ContactUs;
