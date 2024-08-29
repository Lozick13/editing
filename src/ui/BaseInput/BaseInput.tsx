import { FC } from 'react';
import { input } from '../input';
import classes from './baseinput.module.css';

const BaseInput: FC<input> = ({
	id,
	name,
	value,
	type,
	change,
	min,
	required,
}) => {
	return (
		<>
			<input
				id={id}
				name={name}
				value={value}
				type={type}
				onChange={change}
				min={min}
				required={required}
				className={classes['base-input']}
			/>
		</>
	);
};

export default BaseInput;
