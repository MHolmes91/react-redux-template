import React from 'react';
import { Control, Form, Errors, actions } from 'react-redux-form';
 
export default class RegisterFormTest extends React.Component {
	handleSubmit(registerForm) {
		console.log('submitted');
		console.log(registerForm);
		this.props.onRegisterSubmit(registerForm.username, registerForm.password, registerForm.email);
	}

	render() {
		return (
			<Form
				className="form"
				model="formModels.registerForm"
				onSubmit={(registerForm) => this.handleSubmit(registerForm)}
				validators= {{
					'': {
						passwordsMatch: (vals) => !vals.password || vals.password === vals.confirmPassword
					},
					'email': {
						isEmail: (val) => val.match(/^\w+\@\w+\.\w+$/)
					}
				}}
			>
				<div className="formField">
					<label className="formLabel">Username:</label>
					<Control.text className="formControl" model=".username" required />
				</div>

				<div className="formField">
					<label className="formLabel">Password</label>
					<Errors
					  model="."
					  className="error"
					  messages={{
					    passwordsMatch: 'Passwords do not match.',
					  }}
					/>
					<Control
						className="formControl"
						type="password"
						model=".password"
						required
					/>
				</div>

				<div className="formField">
					<label className="formLabel">Confirm Password</label>
					<Control className="formControl" type="password" model=".confirmPassword" required />
				</div>

				<div className="formField">
					<label className="formLabel">Email</label>
					<Errors
					  model=".email"
					  show={{touched: true, focus: false}}
					  className="error"
					  messages={{
					    isEmail: 'Please provide a valid email address.',
					  }}
					/>
					<Control.text
						className="formControl"
						model=".email"
						show={{touched: true, focus: false}}
						required
					/>
				</div>

				<div className="formField">
					<button className="formButton" type="submit">Register</button>
				</div>
			</Form>
		);
	}
}