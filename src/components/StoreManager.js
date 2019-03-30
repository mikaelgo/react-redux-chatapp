import { createStore } from "redux";
import rootReducer from './reducers';

//Creating and exporting a constant of store to use it in the app
export const store = createStore(rootReducer)