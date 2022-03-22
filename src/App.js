import { Provider } from 'react-redux'

import './Assets/style.scss';

import Form from './Components/Form/Form'
import Rate from './Components/Rate/Rate'
import {store} from "./services/Store/store";

const App = () => {
	return (
		<Provider store={store}>
			<div className="app">
				<header className="header">
					<h1>Rate your favorite book</h1>
				</header>
				<main className='main'>
					<Form/>
					<Rate />
				</main>
			</div>
		</Provider>
	);
}

export default App;
