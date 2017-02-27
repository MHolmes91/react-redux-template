import React from 'react';
import { Link } from 'react-router';
 
export default class Logout extends React.Component {
	constructor(props) {
	    super(props);

	    this.onLogout = props.onLogout;
	}

	componentWillMount() {
		this.onLogout();
	}

	render() {
		return (
			<div>
				<h1>
					Goodbye Cruel World
				</h1>
				<Link to="/">Wait! Come Back!</Link>
			</div>
		)
	}
}