import React from 'react';
import Slider from "react-slick";
import sport from '../components/active-wear-9.jpeg'
class Slider1 extends React.Component{
    constructor(props) {
      super(props);
     
    }
  
  render(){
    return (
      <div>
        
       <Slider className='h' speed={100} arrows={true}
                slidesToShow={1}
                slidesToScroll={1}
                infinite={true}
                dots={true}
                autoplay={true}>
           <img src={sport}></img>
           <img src={sport}></img>
           <img src={sport}></img>
           <img src={sport}></img>
       </Slider>
      </div>
    );
  }
  }
  export default Slider1;
  