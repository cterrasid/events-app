import React, { Component } from 'react';
import { ConsumerCategories } from '../context/ContextCategories';

class Form extends Component {
	state = {
		name: '',
		category: '',
	};
	render() {
		return (
			<form>
				<fieldset className="uk-fieldset uk-margin">
					<legend className="uk-legend uk-text-center">Find by name or category</legend>
				</fieldset>
				<div className="uk-column-1-3@m uk-margin">
					<div className="uk-margin" uk-margin="true">
						<input name="name" className="uk-input" placeholder="Event or city name" />
					</div>
					<div className="uk-margin" uk-margin="true">
						<select name="category" className="uk-select">
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
	}
}
export default Form;
