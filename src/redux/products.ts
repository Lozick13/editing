import { ADD_PRODUCT, DELETE_PRODUCT } from './actions';

export const addProduct = (name: string, price: number, id?: string | null) => {
	return {
		type: ADD_PRODUCT,
		payload: {
			name: name,
			price: price,
			id: id,
		},
	};
};

export const deleteProduct = (payload: string) => {
	return {
		type: DELETE_PRODUCT,
		payload,
	};
};
