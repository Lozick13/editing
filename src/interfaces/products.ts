export interface products {
	nameValue: string;
	priceValue: number | null;
	productsValue: { id: string; name: string; price: number }[];
}
