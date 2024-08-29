import { combineReducers, compose, legacy_createStore } from 'redux';
import { productsReducer } from './productsReducer';

/* eslint-disable @typescript-eslint/no-explicit-any */
const ReactReduxDevTools =
	(window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
	(window as any).__REDUX_DEVTOOLS_EXTENSION__();
/* eslint-enable @typescript-eslint/no-explicit-any */

export const configureStore = () => {
	return legacy_createStore(
		combineReducers({ products: productsReducer }),
		compose(ReactReduxDevTools)
	);
};
