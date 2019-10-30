import React from 'react';
import Header from './components/Header';
import Form from './components/Form';
import ProviderCategories from './context/ContextCategories';
import ProviderEvents from './context/ContextEvents';

function App() {
	return (
		<ProviderEvents>
			<ProviderCategories>
				<Header />
				<div className="uk-container">
					<Form />
				</div>
			</ProviderCategories>
		</ProviderEvents>
	);
}

export default App;
