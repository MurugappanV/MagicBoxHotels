import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {English} from '../Content/English.js';
import '../Section/section.css';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Flip from 'react-reveal/Flip';
import Header from '../Header/Header';
class Section1 extends Component{
	render(){
		return(
			<section className='section-1'>
			<Header />
			  <Fade left>
				<h1 className='title'>{English.Section1.title}</h1>
			</Fade>
			<Zoom delay={2000}>
			<img src={English.Section1.logo} className='logopic' />
			</Zoom>
			<Fade right delay={1000}>
				<p className='desc'>{English.Section1.subTitle}</p>
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
				<h1 className='sub-title'>{English.Section2.title}</h1>
			</Fade>
			<Zoom delay={1000}>
				<p className='sub-desc'>{English.Section2.subTitle}</p>
			</Zoom>	
			<Zoom delay={1000}>
				<img src={English.Section2.hotelImg} className="hotel" />
			</Zoom>
			</section>
			);
	}
}

class Section3 extends Component{
	render(){
		return(
			<section className='section-3'>
			<div className='points'>
			<h1>As simple as 5 steps</h1>
			<ol className='listtype'>
			<li>Set Things Up</li>
			<li>Screen Applicants</li>
			<li>Plan A Move In</li>
			<li>Welcome Your Tenant</li>
			<li>Manage Your Properties</li>
			</ol>
			</div>
			</section>
			);
	}
}

export{
	Section1,Section2,Section3
}