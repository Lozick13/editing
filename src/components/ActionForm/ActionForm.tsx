import { FC } from 'react';
import BaseButton from '../../ui/BaseButton/BaseButton';
import BaseInput from '../../ui/BaseInput/BaseInput';
import classes from './actionform.module.css';

const ActionForm: FC<{
	data: { name: string; price: number | null };
	setData: {
		name: (name: string) => void;
		price: (price: number | null) => void;
	};
	addData: () => void;
}> = ({ data, setData, addData }) => {
	const handleAddProduct = (e: React.FormEvent) => {
		e.preventDefault();
		addData();
		setData.name('');
		setData.price(null);
	};

	return (
		<>
			<form onSubmit={handleAddProduct} className={classes['action-form']}>
				<BaseInput
					id='product'
					name='product'
					value={data.name}
					type='text'
					change={(e: React.ChangeEvent<HTMLInputElement>) =>
						setData.name(e.target.value)
					}
					required={true}
				/>
				<BaseInput
					id='price'
					name='price'
					value={data.price === null ? '' : data.price}
					type='number'
					change={(e: React.ChangeEvent<HTMLInputElement>) =>
						setData.price(Number(e.target.value))
					}
					min={1}
					required={true}
				/>
				<BaseButton type='submit'>Save</BaseButton>
				<BaseButton
					type='button'
					click={() => {
						setData.name('');
						setData.price(null);
					}}
				>
					Cancel
				</BaseButton>
			</form>
		</>
	);
};

export default ActionForm;
