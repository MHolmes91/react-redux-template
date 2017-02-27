import React from 'react';
import { Link } from 'react-router';
import Start from './Start.jsx';
import Dashboard from './Dashboard.jsx';
 
export default class Index extends React.Component {
	constructor(props) {
	    super(props);
	    console.log('hello props');
	    console.log(props);
	    this.user = props.user ? props.user : 'World';
	    this.isLoggedIn = !!props.user;
	}

	render() {
		if(this.isLoggedIn){
			return (
				<Dashboard user={this.user} />
			)
		}
		else{
			return (
				<Start />
			)
		}
	}
}