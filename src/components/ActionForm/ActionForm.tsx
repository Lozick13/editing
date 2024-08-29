import { useDispatch, useSelector } from 'react-redux';
import { state } from '../../interfaces/state';
import { addProduct, setName, setPrice } from '../../redux/products';
import BaseButton from '../../ui/BaseButton/BaseButton';
import BaseInput from '../../ui/BaseInput/BaseInput';
import classes from './actionform.module.css';

const ActionForm = () => {
	const dispatch = useDispatch();
	const { nameValue, priceValue } = useSelector(
		(state: state) => state.products
	);

	const handleAddProduct = (e: React.FormEvent) => {
		e.preventDefault();
		dispatch(addProduct());
	};

	return (
		<>
			<form onSubmit={handleAddProduct} className={classes['action-form']}>
				<BaseInput
					id='product'
					name='product'
					value={nameValue}
					type='text'
					change={(e: React.ChangeEvent<HTMLInputElement>) =>
						dispatch(setName(e.target.value))
					}
					required={true}
				/>
				<BaseInput
					id='price'
					name='price'
					value={priceValue === null ? '' : priceValue}
					type='number'
					change={(e: React.ChangeEvent<HTMLInputElement>) =>
						dispatch(setPrice(Number(e.target.value)))
					}
					min={1}
					required={true}
				/>
				<BaseButton type='submit'>Save</BaseButton>
				<BaseButton type='button'
					click={() => {
						dispatch(setName(''));
						dispatch(setPrice(null));
					}}
				>
					Cancel
				</BaseButton>
			</form>
		</>
	);
};

export default ActionForm;
