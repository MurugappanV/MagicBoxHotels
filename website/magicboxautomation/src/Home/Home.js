import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import { Parallax } from 'react-parallax';

export class Home extends Component {
  render() {
    return (
    	<div style={{margin: '200px'}}>
      <Parallax
            blur={10}
            bgImage={require('../asset/img/bg.jpg')}
            bgImageAlt="the cat"
            strength={200}
        >
            Put some text content here - even an empty div with fixed dimensions to have a height
            for the parallax.
            <div style={{ height: '1200px' }} />
        </Parallax>
        </div>
    );
  }
}

