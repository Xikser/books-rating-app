import { ADD } from '../actions/rateActions'

export const rateReducer = (state = [], action: any) => {
	console.log(action.payload)
	switch (action.type) {
		case ADD:
			return [...state, action.payload]

		default:
			return state
	}
}
