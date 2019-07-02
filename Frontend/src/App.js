import React from 'react';
import './App.css';
import Header from './components/Header'
import Slider1 from './components/Slider'
import About from './components/About'
import Form from './components/Form'
import Shoes from './components/Shoes'
import Login from './components/Login'
import ContactUs from './components/ContactUs'
import Clothes from './components/Clothes'
import Equipment from './components/Equipment'
import {BrowserRouter as Router ,Switch, Route} from 'react-router-dom';
import HomePage from './components/HomePage'

class App extends React.Component{
  constructor(props) {
    super();
   
  }
  
render(){
  return (
    <div className="App"> 
    <Router>
      <Route path="/" exact component={HomePage} />
      <Route path="/about" exact component={About}/>
      <Route path="/products/shoes" component={Shoes} />
      <Route path="/products/clothes" component={Clothes} />
      <Route path="/products/equipment" component={Equipment} />
      <Route path="/login" component={Login} />
      <Route path="/#contact" component={HomePage} />
    </Router>
    </div>
  );
}
}
export default App;
