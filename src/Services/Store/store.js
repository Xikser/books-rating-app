import {createStore} from "redux";
import {rootReducer} from "../Reducers/rootReduce";

export const store = createStore(rootReducer)
