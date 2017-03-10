import React from 'react';
import { Control, Form, actions } from 'react-redux-form';
 
export default class SearchForm extends React.Component {
	handleSubmit(searchForm) {
		this.props.onSearchSubmit(searchForm.query, searchForm.type);
	}

	render() {
		return (
			<Form
				className="form"
				model="formModels.searchForm"
				onSubmit={(searchForm) => this.handleSubmit(searchForm)}
			>
				<div className="formField">
					<label className="formLabel">Query</label>
					<Control.text className="formControl" model=".query" required />
				</div>

				<div className="formField">
					<label className="formLabel">Type</label>
					<Control.text className="formControl" model=".type" required />
				</div>
				<div className="formField">
					<button className="formButton" type="submit">Search</button>
				</div>
			</Form>
		)
	}
}