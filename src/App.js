import React from 'react';
import Header from './components/Header';
import Form from './components/Form';
import ProviderCategories from './context/ContextCategories';

function App() {
	return (
		<ProviderCategories>
			<Header />
			<div className="uk-container">
				<Form />
			</div>
		</ProviderCategories>
	);
}

export default App;
