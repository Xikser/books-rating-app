import {connect} from 'react-redux'

import './style.scss'

const Rate = ({rates}: {rates: any}) => {
	console.log(rates)

	if (rates) {
		return (
			<div className='rate-box'>
				<p>Author: {rates[0]?.author}</p>
				<p>Rate: {rates[0]?.rate}</p>
				<p>Comment: {rates[0]?.comment}</p>
			</div>
		);
	}
};

const connectReduxToProps = (store: any) => ({
	rates: store.rates
})

const RateConsumer = connect(connectReduxToProps)(Rate as any)

export default RateConsumer;
