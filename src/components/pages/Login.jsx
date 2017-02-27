import React from 'react';
import LoginForm from '../../containers/forms/LoginContainer.jsx';
import { Link } from 'react-router';
 
export default class Login extends React.Component {
	render() {
		return (
			<div>
				<h1>
					Login
				</h1>
				<LoginForm />
				<br />
				<Link to="/">Go Home</Link>
			</div>
		)
	}
}