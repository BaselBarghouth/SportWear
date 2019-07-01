import React from 'react';
import './App.css';
import Header from './components/Header'
import Slider1 from './components/Slider'
import About from './components/About'
import Form from './components/Form'
import Shoes from './components/Shoes'
import Login from './components/Login'
import Clothes from './components/Clothes'
import Equipment from './components/Equipment'
import {BrowserRouter as Router ,Switch, Route} from 'react-router-dom';
class App extends React.Component{
  constructor(props) {
    super();
   
  }
  
render(){
  return (
    <div className="App"> 
     
    <Router>
    <Header />
    <Slider1 />
   
      {/* <Route path="/" component={App} /> */}
      <Route path="/poducts/shoes" component={Shoes} />
      <Route path="/poducts/clothes" component={Clothes} />
      <Route path="/poducts/equipment" component={Equipment} />
    </Router>
    <About />
      <Form />
    </div>
  );
}
}
export default App;
