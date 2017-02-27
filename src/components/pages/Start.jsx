import React from 'react';
import { Link } from 'react-router';

let logoSrc = require('../../assets/template-image.png');
 
export default class Start extends React.Component {
	constructor(props) {
	    super(props);
	}

	render() {
		return (
			<div>
				<img src={logoSrc} height="300px" />
				<h1>Dashboard</h1>
				<ul>
					<li><Link to="/login">Log In</Link></li>
					<li><Link to="/register">Register</Link></li>
				</ul>
			</div>
		)
	}
}