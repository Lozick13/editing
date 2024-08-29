import { products } from '../interfaces/products';
import { ADD_PRODUCT, DELETE_PRODUCT, SET_NAME, SET_PRICE } from './actions';

const initialState: products = {
	nameValue: '',
	priceValue: null,
	productsValue: [],
};

export const productsReducer = (
	state = initialState,
	action: { type: string; payload?: unknown }
) => {
	switch (action.type) {
		case SET_NAME: {
			return { ...state, nameValue: action.payload };
		}
		case SET_PRICE: {
			return { ...state, priceValue: action.payload };
		}
		case ADD_PRODUCT: {
			if (
				state.nameValue === '' ||
				state.priceValue === null ||
				state.priceValue < 1
			)
				return state;

			const existingProductIndex = state.productsValue.findIndex(
				p => p.name === state.nameValue
			);

			if (existingProductIndex >= 0) {
				const updatedProducts = [...state.productsValue];

				updatedProducts[existingProductIndex] = {
					...updatedProducts[existingProductIndex],
					price: state.priceValue,
				};
				
				return {
					...state,
					productsValue: updatedProducts,
					nameValue: '',
					priceValue: null,
				};
			} else {
				return {
					...state,
					productsValue: [
						...state.productsValue,
						{
							id: '' + Date.now(),
							name: state.nameValue,
							price: state.priceValue,
						},
					],
					nameValue: '',
					priceValue: null,
				};
			}
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
