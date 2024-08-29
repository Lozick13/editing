import { useDispatch, useSelector } from 'react-redux';
import { product } from '../../interfaces/product';
import { state } from '../../interfaces/state';
import { deleteProduct, setName, setPrice } from '../../redux/products';
import BaseButton from '../../ui/BaseButton/BaseButton';
import classes from './productslist.module.css';

const ProductsList = () => {
	const dispatch = useDispatch();
	const { productsValue } = useSelector((state: state) => state.products);

	const edit = (p: product) => {
		dispatch(setName(p.name));
		dispatch(setPrice(p.price));
	};

	return (
		<>
			{productsValue.length > 0 ? (
				<ul className={classes['products-list']}>
					{productsValue.map(p => (
						<li key={p.id} className={classes['products-list__item']}>
							<div className={classes['products-list__product']}>
								<span>{p.name}</span>
								<span>{p.price}</span>
							</div>
							<div className={classes['products-list__buttons']}>
								<BaseButton
									click={() => {
										edit(p);
									}}
								>
									<i className='material-icons'>edit</i>
								</BaseButton>
								<BaseButton
									click={() => {
										dispatch(deleteProduct(p.id));
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
