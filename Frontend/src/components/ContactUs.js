import React,{Component} from 'react';
import ContactInfo from './ContactInfo';

class ContactUs extends Component {
  constructor(props) {
    super(props);
  }
  render() {
      return (
        <div id="contact">
              <ContactInfo />
             
        </div>
      )
}
}

export default ContactUs;
