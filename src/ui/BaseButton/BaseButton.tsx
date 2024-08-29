import { FC } from 'react';
import { button } from '../button';
import classes from './basebutton.module.css';

const BaseButton: FC<button> = ({ type, click, children }) => {
	return (
		<>
			<button type={type} onClick={click} className={classes['base-button']}>
				{children}
			</button>
		</>
	);
};

export default BaseButton;
