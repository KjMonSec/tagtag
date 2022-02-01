<<<<<<< HEAD
<<<<<<< HEAD
import React, { Component } from 'react';
import './App.css';
import { 
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Register from "./components/auth/Register";
import Welcome from "./components/auth/Welcome";
import Login from "./components/auth/Login";
import Service from "./Service";
import Navbar from "./components/Navbar/Navbar";



class App extends Component {
  
  state = {
    isAuthenticated:false,
    user:null
  } 

  setAuthStatus = authenticated => {
    this.setState({isAuthenticated: authenticated});
  }

  setUser = user => {
    this.setState({user:user});
  }
  render(){

  return (
    <div>
    <Navbar/>
    <Router>
      <div>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/register" element={<Register/>}/>
        <Route exact path="/welcome" element={<Welcome/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/awsservice" element={<Service/>}/>
        <Route path="*" element={<Home/>}/>}
      </Routes>
      </div>
    </Router>
    </div>
  );
}
}
=======
=======
>>>>>>> 3b4f83b561b195562a6700d1d3f2465442e766b1
import ScrollableTabsButtonForce from './ScrollableTabs'


function App() {
  return (
    <div className="App">
      <header className="App-header">
       <ScrollableTabsButtonForce /> 

      </header>
    </div>
  );
}
<<<<<<< HEAD
>>>>>>> 3b4f83b561b195562a6700d1d3f2465442e766b1
=======
>>>>>>> 3b4f83b561b195562a6700d1d3f2465442e766b1

export default App;
