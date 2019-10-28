import React, { Component } from 'react';
import axios from 'axios';

//Crear el context
const ContextCategories = React.createContext();

//Exportar el Consumer (se importará en cualquier parte donde se quiera acceder a los datos)
export const ConsumerCategories = ContextCategories.Consumer;

class ProviderCategories extends Component {
    token = 'LZB65BYVIO4435B6STTS';

	state = { categories: [] };

	componentDidMount() {
		this.getCategories();
	}

	getCategories = async () => {
		let url = `https://www.eventbriteapi.com/v3/categories/?token=${this.token}`;

		let categories = await axios.get(url);

		this.setState({
			categories: categories.data.categories,
		});
	};

	render() {
		return (
			<ContextCategories.Provider value={{ categories: this.state.categories }}>
				{this.props.children}
			</ContextCategories.Provider>
		);
	}
}

export default ProviderCategories;
