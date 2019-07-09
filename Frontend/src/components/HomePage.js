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
    <div className="background">
    <Header />
    <Slider1 />
    </div>
    <div className="background1">
    <About />
    </div>
    <div className="background">
    <ContactUs />
    </div>
    </div>
  );
}
}
export default HomePage;
