import React, { Component } from 'react';
import axios from 'axios';

const ContextEvents = React.createContext();

export const ConsumerEvents = ContextEvents.Consumer;

class ProviderEvents extends Component {
	sortBy = 'date';

	state = {
		events: [],
	};

	getEvents = async search => {
		let url = `https://www.eventbriteapi.com/v3/events/search/?q=${search.name}&categories=${search.category}&sort_by=${this.sortBy}&token=${process.env.REACT_APP_API_KEY}`;

		//consultar la API con la url
		const events = await axios(url);

		this.setState({
			events: events.data.events,
		});
	};

	render() {
		return (
			<ContextEvents.Provider
				value={{
					events: this.state.events,
					getEvents: this.getEvents,
				}}
			>
				{this.props.children}
			</ContextEvents.Provider>
		);
	}
}

export default ProviderEvents;
