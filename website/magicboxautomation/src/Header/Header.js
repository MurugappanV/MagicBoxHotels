import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import logo from '../asset/img/logo.jpg';
import './header.css';
class Header extends Component{
	render(){
		return(
			<div>
			<header id="navbar">
			<h1 className='logo'>MagixBoxAutomation</h1>
			</header>
			</div>
			);
	}
}
export default Header;