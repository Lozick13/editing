import { ADD_PRODUCT, DELETE_PRODUCT, SET_NAME, SET_PRICE } from './actions';

export const setName = (payload: string) => {
	return {
		type: SET_NAME,
		payload,
	};
};

export const setPrice = (payload: number | null) => {
	return {
		type: SET_PRICE,
		payload,
	};
};

export const addProduct = () => {
	return {
		type: ADD_PRODUCT,
	};
};

export const deleteProduct = (payload: string) => {
	return {
		type: DELETE_PRODUCT,
		payload,
	};
};
