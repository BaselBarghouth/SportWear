import React from 'react';
import Slider from "react-slick";
class Slider1 extends React.Component{
    constructor(props) {
      super(props);
     this.state={
       clothes:'',
       shoes:'',
       equipment:''
     }
    }


    async componentDidMount(e){
      try{
          const respons = await fetch('/products/clothes/picture')
          const pictures = await respons.json();
          this.setState({clothes:pictures[0].Picture})
     
      }
      catch(err){
          console.log(err)
      }
      try{
        const respons = await fetch('/products/shoes/picture')
        const pictures1 = await respons.json();
        this.setState({shoes:pictures1[0].Picture})
       
    }
    catch(err){
        console.log(err)
    }
    try{
      const respons = await fetch('/products/equipment/picture')
      const pictures2 = await respons.json();
      this.setState({equipment:pictures2[0].Picture})
     
  }
  catch(err){
      console.log(err)
  }
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
           <img name="clothes" src={this.state.clothes}></img>
           <img name="shoes" src={this.state.shoes}></img>
           <img name="equipment" src={this.state.equipment}></img>
       </Slider>
      </div>
    );
  }
  }
  export default Slider1;
  