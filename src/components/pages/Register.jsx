import React from 'react';
import RegisterForm from '../../containers/forms/RegisterContainer.jsx';
import { Link } from 'react-router';
 
export default class Register extends React.Component {
	render() {
		return (
			<div>
				<h1>
					Register
				</h1>
				<RegisterForm />
				<br />
				<Link to="/">Go Home</Link>
			</div>
		)
	}
}