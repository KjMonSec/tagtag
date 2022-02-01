import React, { Component } from 'react';
import { Link } from "react-router-dom";
import ScrollableTabs from "./ScrollableTabs"

class Service extends Component {
	
	render(){
		console.log("Logged In User : ");
		return(
			<ScrollableTabs/>
			)
	}
}


export default Service;

//window.location.href = "/service"