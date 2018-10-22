import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {English} from '../Content/English.js';
import './footer.css';
class Footer extends Component{
	render(){
		return(
			<footer>
			<div className='foot1'>			
			<div className='list1'>
			<h4 className='head'>{English.Footerlist1.heading}</h4>
			<ol className='listtype'>
				<li>{English.Footerlist1.subTitle[0]}</li>
				<li>{English.Footerlist1.subTitle[1]}</li>
				<li>{English.Footerlist1.subTitle[2]}</li>
				<li>{English.Footerlist1.subTitle[3]}</li>
			</ol>
			</div>
			<div className='list2'>
			<h4 className='head'>{English.Footerlist2.heading}</h4>
			<ol className='listtype'>
				<li>{English.Footerlist2.subTitle[0]}</li>
				<li>{English.Footerlist2.subTitle[1]}</li>
				<li>{English.Footerlist2.subTitle[2]}</li>
			</ol>
			</div>
			<div className='list3'>
			<h4 className='head'>{English.Footerlist3.heading}</h4>
			<ol className='listtype'>
				<li>{English.Footerlist3.subTitle[0]}</li>
				<li>{English.Footerlist3.subTitle[1]}</li>
				<li>{English.Footerlist3.subTitle[2]}</li>
			</ol>
			</div>
			<div className='list4'>
			<h4 className='head'>{English.Footerlist4.heading}</h4>
			<ol className='listtype'>
				<li>{English.Footerlist4.subTitle[0]}</li>
				<li>{English.Footerlist4.subTitle[1]}</li>
				<li>{English.Footerlist4.subTitle[2]}</li>
			</ol>
			</div>
			</div>
			<div className='foot2'>
			<div className='col1'>
			&copy;magixbox 2018 All rights reserved
			</div>
			<div className='col2'>

			</div>
			</div>
			</footer>
			);
	}
}
export default Footer;