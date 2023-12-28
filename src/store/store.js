import { combineReducers, createStore } from "redux";
import { counterReducer, textReducer } from "./reducer";

const rootReducer=combineReducers({
    count:counterReducer,
    text:textReducer,
})

export const store = createStore(rootReducer);