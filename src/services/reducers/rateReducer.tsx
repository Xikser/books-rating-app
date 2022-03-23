import { ADD } from '../actions/rateActions'

export const rateReducer = (state = [], action: any) => {
	switch (action.type) {
		case ADD:
			return [...state, action.payload]

		default:
			return state
	}
}
