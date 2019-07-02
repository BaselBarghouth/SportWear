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
import HomePage from './components/HomePage'
import AdminMenu from './components/AdminMenu'
import ShoesAdmin from './components/ShoesAdmin'
import Create from './components/Create'
class App extends React.Component{
  constructor(props) {
    super();
   
  }
  
render(){
  return (
    <div className="App"> 
      {/* <Create /> */}
      <ShoesAdmin />
    {/* <AdminMenu /> */}
    {/* <Router>
      <Route path="/" exact component={HomePage} />
      <Route path="/products/shoes" component={Shoes} />
      <Route path="/products/clothes" component={Clothes} />
      <Route path="/products/equipment" component={Equipment} />
      <Route path="/login" component={Login} />
      <Route path="/adminmenu/shoes" component={ShoesAdmin} />
      <Route path="/adminmenu/clothes" component={ClothesAdmin} />
      <Route path="/adminmenu/equipment" component={EquipmentAdmin} />
      <AdminMenu />
      
    </Router> */}
    </div>
  );
}
}
export default App;
