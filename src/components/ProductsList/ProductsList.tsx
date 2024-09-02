import { FC } from 'react';
import { product } from '../../interfaces/product';
import BaseButton from '../../ui/BaseButton/BaseButton';
import classes from './productslist.module.css';

const ProductsList: FC<{
	products: product[];
	editData: (product: product) => void;
	deleteData: (id: string) => void;
}> = ({ products, editData, deleteData }) => {
	return (
		<>
			{products.length > 0 ? (
				<ul className={classes['products-list']}>
					{products.map(p => (
						<li key={p.id} className={classes['products-list__item']}>
							<div className={classes['products-list__product']}>
								<span>{p.name}</span>
								<span>{p.price}</span>
							</div>
							<div className={classes['products-list__buttons']}>
								<BaseButton
									click={() => {
										editData(p);
									}}
								>
									<i className='material-icons'>edit</i>
								</BaseButton>
								<BaseButton
									click={() => {
										deleteData(p.id);
									}}
								>
									<i className='material-icons'>delete</i>
								</BaseButton>
							</div>
						</li>
					))}
				</ul>
			) : (
				<p className={classes['products-list__empty']}>No products available</p>
			)}
		</>
	);
};

export default ProductsList;
