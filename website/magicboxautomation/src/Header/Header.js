import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import {English} from '../Content/English.js'
import logo from '../asset/img/logo.jpg';
import './header.css';
class Header extends Component{
	render(){
		return(
			<header id="navbar">
			<h1 className='logo'>{English.App.title}</h1>
			</header>
			);
	}
}
export default Header;