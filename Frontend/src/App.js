import React from 'react';
import './App.css';
import Header from './components/Header'
import Slider1 from './components/Slider'
import About from './components/About'
import Form from './components/Form'
import Shoes from './components/Shoes'
import Login from './components/Login'
class App extends React.Component{
  constructor(props) {
    super(props);
   
  }

render(){
  return (
    <div className="App">    
    {/* <Header />
    <Slider1 />
    <About />
    <Form /> */}
    <Shoes />
    {/* <Login /> */}
    </div>
  );
}
}
export default App;
