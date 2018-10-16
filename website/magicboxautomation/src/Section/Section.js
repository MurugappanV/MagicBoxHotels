import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import hotel from '../asset/img/hotel.png';
import Header from '../Header/Header';
import './section.css';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Flip from 'react-reveal/Flip';
import logo from '../asset/img/logo.jpg';
class Section extends Component{
	render(){
		return(
			<div>
			<section className='section-1'>
			<Header />
			  <Fade left>
				<h1 className='title'>We help transforming smart hotels</h1>
			</Fade>
			<Zoom delay={2000}>
			<img src={logo} className='logopic' />
			</Zoom>
			<Fade right delay={1000}>
				<p className='desc'>Secure control at your fingertip with lifetime experience of comfort and luxury for your customers</p>
			</Fade>
			</section>
			<section className='section-2'>
			<Fade>
				<h1 className='sub-title'>What we do</h1>
			</Fade>
			<Zoom delay={1000}>
				<p className='sub-desc'>End to end customized automation services for your hotels and home</p>
			</Zoom>	
			<Zoom delay={1000}>
				<img src={hotel} className="hotel" />
			</Zoom>
			</section>
			<section className='section-3'></section>
			</div>
			);
	}
}
export default Section;