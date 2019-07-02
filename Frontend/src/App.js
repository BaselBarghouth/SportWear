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
import AdminMenu from './components/AdminMenu'
import ShoesAdmin from './components/ShoesAdmin'
import Create from './components/Create'
import ClothesAmin from './components/ClothesAdmin'
import EquipmentAdmin from './components/EquipmentAdmin'
import EditForm from './components/EditForm'
class App extends React.Component{
  constructor(props) {
    super();
   
  }
  
render(){
  return (
    <div className="App"> 
    <Router>
      <Route path="/editform" component={EditForm} />
      <Route path="/" exact component={HomePage} />
      <Route path="/about" exact component={About}/>
      <Route path="/products/shoes" component={Shoes} />
      <Route path="/products/clothes" component={Clothes} />
      <Route path="/products/equipment" component={Equipment} />
      <Route path="/login" component={Login} />
      <Route path="/adminmenu/shoes" component={ShoesAdmin} />
      <Route path="/adminmenu/clothes" component={ClothesAmin} />
      <Route path="/adminmenu/equipment" component={EquipmentAdmin} />
    </Router>
    
    
    </div>
  );
}
}
export default App;
