import {combineReducers} from "redux";

import { rateReducer } from './rateReducer'

export const rootReducer = combineReducers({
	rates: rateReducer
})
