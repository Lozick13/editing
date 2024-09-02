import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import ActionForm from './components/ActionForm/ActionForm';
import ProductsList from './components/ProductsList/ProductsList';
import { product } from './interfaces/product';
import { state } from './interfaces/state';
import { addProduct, deleteProduct } from './redux/products';

function App() {
	const dispatch = useDispatch();
	const { productsValue } = useSelector((state: state) => state.products);
	const [name, setName] = useState<string>('');
	const [price, setPrice] = useState<number | null>(null);

	const addData = () => {
		if (price !== null) dispatch(addProduct(name, price));
	};
	const editData = (p: product) => {
		setName(p.name);
		setPrice(p.price);
	};
	const deleteData = (id: string) => {
		dispatch(deleteProduct(id));
	};

	return (
		<>
			<ActionForm
				data={{ name: name, price: price }}
				setData={{ name: setName, price: setPrice }}
				addData={addData}
			/>
			<ProductsList
				products={productsValue}
				editData={editData}
				deleteData={deleteData}
			/>
		</>
	);
}

export default App;
