import React, { Component } from 'react';
import { ConsumerCategories } from '../context/ContextCategories';
import { ConsumerEvents } from '../context/ContextEvents';

class Form extends Component {
	state = {
		name: '',
		category: '',
	};

	//Si el usuario agrega un evento o categoria
	getEventsData = e => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	render() {
		return (
			<ConsumerEvents>
				{value => {
					console.log(value);

					return (
						<form
							onSubmit={e => {
								e.preventDefault();
								value.getEvents(this.state);
							}}
						>
							<fieldset className="uk-fieldset uk-margin">
								<legend className="uk-legend uk-text-center">Find by name or category</legend>
							</fieldset>
							<div className="uk-column-1-3@m uk-margin">
								<div className="uk-margin" uk-margin="true">
									<input
										name="name"
										className="uk-input"
										placeholder="Event or city name"
										onChange={this.getEventsData}
									/>
								</div>
								<div className="uk-margin" uk-margin="true">
									<select name="category" className="uk-select" onChange={this.getEventsData}>
										<option value="">--Choose a category--</option>
										<ConsumerCategories>
											{/* Dentro del consumer se tiene acceso a los datos */}
											{value => {
												return value.categories.map(category => (
													<option key={category.id} value={category.id} data-uk-form-select>
														{category.name}
													</option>
												));
											}}
										</ConsumerCategories>
									</select>
								</div>
								<div>
									<input type="submit" className="uk-button uk-button-danger" value="Find" />
								</div>
							</div>
						</form>
					);
				}}
			</ConsumerEvents>
		);
	}
}
export default Form;
