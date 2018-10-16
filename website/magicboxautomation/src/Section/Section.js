import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './section.css';
class Section extends Component{
	render(){
		return(
			<div>
			<section className='section-1'>
				<h1 className='title'>We help transforming smart hotels</h1>
				<p className='desc'>Secure control at your fingertip with lifetime experience of comfort and luxury for your customers</p>
			</section>
			<section className='section-2'>
				<h1 className='sub-title'>What we do</h1>
				<p className='sub-desc'>End to end customized automation services for your hotels and home</p>
				<img src='..//asset/img/hotel.png' className="hotel" />
			</section>
			<section className='section-3'></section>
			</div>
			);
	}
}
export default Section;