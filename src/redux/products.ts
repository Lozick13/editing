import { ADD_PRODUCT, DELETE_PRODUCT } from './actions';

export const addProduct = (name: string, price: number) => {
	return {
		type: ADD_PRODUCT,
		payload: {
			name: name,
			price: price,
		},
	};
};

export const deleteProduct = (payload: string) => {
	return {
		type: DELETE_PRODUCT,
		payload,
	};
};
