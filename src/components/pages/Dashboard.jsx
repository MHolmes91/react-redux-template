import React from 'react';
import { Link } from 'react-router';
 
export default class Dashboard extends React.Component {
	constructor(props) {
	    super(props);
	    console.log('hello props');
	    console.log(props);
	    this.name = props.user ? props.user : 'World';
	    this.isLoggedIn = !!props.user;
	}

	render() {
		if(this.isLoggedIn){
			return (
				<div>
					<h1>Hello {this.name}</h1>
					<ul>
						<li><Link to="/logout">Log Out</Link></li>
					</ul>
				</div>
			)
		}
		else{
			return (
				<FourOhThree />
			);
		}
	}
}