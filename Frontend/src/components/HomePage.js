import React from 'react';
import Header from './Header'
import Slider1 from './Slider'
import About from './About'
import ContactUs from './ContactUs'
class HomePage extends React.Component{
  constructor(props) {
    super();
   
  }
  
render(){
  return (
    <div> 
    <Header   />
    <Slider1 />
    <About />
    <ContactUs />
    </div>
  );
}
}
export default HomePage;
