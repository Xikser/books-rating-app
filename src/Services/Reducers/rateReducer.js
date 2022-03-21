import { ADD } from '../Actions/rateAction'

export const rateReducer = (state = [], action) => {
	console.log(action.payload)
	switch (action.type) {
		case ADD:
			return [...state, action.payload]

		default:
			return state
	}
}
