import { Provider } from 'react-redux'
import { useState } from 'react'

import './assets/style.scss';

import Form from './components/Form/Form'
import Rate from './components/Rate/Rate'
import {store} from "./services/store/store";

const App = () => {
	const [rateVisibility, setRateVisibility] = useState<boolean>(false)

	return (
		<Provider store={store}>
			<div className="app">
				<header className="header">
					<h1>Rate your favorite book</h1>
				</header>
				<main className='main'>
					<Form onFormSend={setRateVisibility} />

					{
						rateVisibility && <Rate />
					}
				</main>
			</div>
		</Provider>
	);
}

export default App;
