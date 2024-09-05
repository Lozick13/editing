import { action } from '../interfaces/action';
import { products } from '../interfaces/products';
import { ADD_PRODUCT, DELETE_PRODUCT } from './actions';

const initialState: products = {
	productsValue: [],
};

export const productsReducer = (state = initialState, action: action) => {
	switch (action.type) {
		case ADD_PRODUCT: {
			const { name, price, id } = action.payload;

			if (name === '' || price === null || price < 1) return state;

			const existingProductIndex = state.productsValue.findIndex(
				p => p.id === id
			);

			if (existingProductIndex !== -1) {
				const updatedProducts = [...state.productsValue];

				updatedProducts[existingProductIndex] = {
					...updatedProducts[existingProductIndex],
					name: name,
					price: price,
				};

				return {
					...state,
					productsValue: updatedProducts,
				};
			}

			return {
				...state,
				productsValue: [
					...state.productsValue,
					{
						id: '' + String(Date.now()),
						name: name,
						price: price,
					},
				],
			};
		}
		case DELETE_PRODUCT: {
			return {
				...state,
				productsValue: state.productsValue.filter(p => p.id !== action.payload),
			};
		}
		default:
			return state;
	}
};
