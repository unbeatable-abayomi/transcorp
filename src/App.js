import React, {Component} from 'react';
import NewNavbar from './Components/NewNavbar';
import TranscopImage from './Components/TranscopImage';
import AboutUs from './Components/AboutUs';
import Morephotos from './Components/Morephotos';


import './App.css';

 class App extends Component{
  
 
  render(){
    return (
       <div>
        <NewNavbar/>
        <TranscopImage/>
        <AboutUs/>
        <Morephotos/>
       </div>
    )
  }  

}

export default App;
