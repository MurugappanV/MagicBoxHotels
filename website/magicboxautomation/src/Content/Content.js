import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import '../Section/section.css';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Flip from 'react-reveal/Flip';
import logo from '../asset/img/logo.jpg';
import Header from '../Header/Header';
import hotel from '../asset/img/hotel.png';
class Section1 extends Component{
	render(){
		return(
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
			);
	}
}

class Section2 extends Component{
	render(){
		return(
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
			);
	}
}

class Section3 extends Component{
	render(){
		return(
			<section className='section-3'></section>
			);
	}
}

export{
	Section1,Section2,Section3
}