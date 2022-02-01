import React, { Component } from 'react';
import {MenuItems} from "./MenuItems";
import './Navbar.css';
import {Button} from "./Button";
import {useGlobalState,setGlobalState} from "./../../constants";
import NavLink from 'react-router-dom';

class Navbar extends Component {
	state = { clicked: false}

	handleClick = () => {
		this.setState({ clicked: !this.state.clicked})
	}
	handleTagTagRequest = () =>
	{
		
	}
	render()
	{
		return(
				<nav className="NavbarItems">
				  <h1 className="navbar-logo">React<i className="fab fa-react"></i></h1>
				  <div className="menu-icon" onClick={this.handleClick}>
				  		<i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
				  </div>
				  <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>

				  		{MenuItems.map((item,index)=>{
				  			return(
				  					 <li key={index}>
				  					 	<a className={item.cName} href={item.url} >
				  					 	{item.title}
				  					 	</a>
				  					 </li>
				  				  )
				  		})}
				  </ul>
          <div>
				  <Button>AWS TagTag</Button>
				</div>
				</nav>
       
			)
	}
}

export default Navbar