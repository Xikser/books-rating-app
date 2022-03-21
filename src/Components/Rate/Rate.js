import {connect} from 'react-redux'

const Rate = ({rates}) => {
	console.log(rates)

	if (rates) {
		return (
			<div>
				<p>Author: {rates[0]?.author}</p>
				<p>Rate: {rates[0]?.rate}</p>
				<p>Comment: {rates[0]?.comment}</p>
			</div>
		);
	}
};

const connectReduxToProps = store => ({
	rates: store.rates
})

const RateConsumer = connect(connectReduxToProps)(Rate)

export default RateConsumer;
