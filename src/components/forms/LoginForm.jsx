import React from 'react';
import { Control, Form, actions } from 'react-redux-form';
 
export default class LoginForm extends React.Component {
	handleSubmit(loginForm) {
		this.props.onLoginSubmit(loginForm.username, loginForm.password);
	}

	render() {
		return (
			<Form
				className="form"
				model="formModels.loginForm"
				onSubmit={(loginForm) => this.handleSubmit(loginForm)}
			>
				<div className="formField">
					<label className="formLabel">Username:</label>
					<Control.text className="formControl" model=".username" required />
				</div>

				<div className="formField">
					<label className="formLabel">Password</label>
					<Control
						className="formControl"
						type="password"
						model=".password"
						required
					/>
				</div>
				<div className="formField">
					<button className="formButton" type="submit">Log In</button>
				</div>
			</Form>
		)
	}
}