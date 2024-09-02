import { ADD_PRODUCT, DELETE_PRODUCT } from '../redux/actions';

export type action =
	| { type: typeof ADD_PRODUCT; payload: { name: string; price: number } }
	| { type: typeof DELETE_PRODUCT; payload: string };
