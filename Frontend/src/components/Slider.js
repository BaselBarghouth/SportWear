import React from "react";
import Carousel from 'react-bootstrap/Carousel'


//  class Slider1 extends React.Component {
//   constructor(props) {
//     super(props);
//    this.state={
//      clothes:'',
//      shoes:'',
//      equipment:''
//    }
//   }


//   async componentDidMount(e){
//     try{
//         const respons = await fetch('/products/clothes/picture')
//         const pictures = await respons.json();
//         this.setState({clothes:pictures[0].Picture})
   
//     }
//     catch(err){
//         console.log(err)
//     }
//     try{
//       const respons = await fetch('/products/shoes/picture')
//       const pictures1 = await respons.json();
//       this.setState({shoes:pictures1[0].Picture})
     
//   }
//   catch(err){
//       console.log(err)
//   }
//   try{
//     const respons = await fetch('/products/equipment/picture')
//     const pictures2 = await respons.json();
//     this.setState({equipment:pictures2[0].Picture})
   
// }
// catch(err){
//     console.log(err)
// }
// }
//   render() {
//     return (
//       <div className={'slider-container'} >
//       <Carousel style={{width:'400px'}} >
//   <Carousel.Item>
//     <img
//       className="d-block w-400"
//       src={this.state.clothes}
//     />
//   </Carousel.Item>
//   <Carousel.Item>
//     <img
//       className="d-blockw-400"
//       src={this.state.shoes}
//     />
//   </Carousel.Item>
//   <Carousel.Item>
//     <img
//       className="d-block w-400"
//       src={this.state.equipment}     
//     />
//   </Carousel.Item>
// </Carousel>
//       </div>
//     );
//   }
// }
class Slider1 extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null,
      clothes:'',
      shoes:'',
      equipment:''
    };
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
  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
    });
  }

  render() {
    const { index, direction } = this.state;

    return (
      <Carousel
        activeIndex={index}
        direction={direction}
        onSelect={this.handleSelect}
       style={{padding:"10px 200px"}}
      >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={this.state.clothes}
            alt="First slide"
            style={{width:'60%',maxHeight:'400px'}}

          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={this.state.shoes}
            alt="Third slide"
            style={{width:'60%',maxHeight:'400px'}}
          />

        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={this.state.equipment}
            alt="Third slide"
            style={{width:'60%',maxHeight:'400px'}}

          />

        
        </Carousel.Item>
      </Carousel>
    );
  }
}
export default Slider1;
