import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Section1} from '../Content/Content';
import {Section2} from '../Content/Content';
import {Section3} from '../Content/Content';
import Footer from '../Footer/Footer';
class Section extends Component{
	render(){
		return(
			<div>
			<Section1 />
			<Section2 />
			<Section3 />
			<Footer />
			</div>
			);
	}
}
export default Section;