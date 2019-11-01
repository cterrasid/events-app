import React from 'react';
import { ConsumerEvents } from '../context/ContextEvents';
import Event from './Event';

const EventsList = () => {
	return (
		<div className="uk-child-width-1-3@m" uk-grid="true">
			<ConsumerEvents>
				{value => {
					return value.events.map(event => <Event key={event.id} event={event} />);
				}}
			</ConsumerEvents>
		</div>
	);
};

export default EventsList;
