import styles from './Button.module.scss';
import { ReactNode } from 'react';

interface Props {
	children: ReactNode;
	onClick?: () => void;
	onAsyncClick?: () => Promise<void>;
}

const Button = ({ children, onClick, onAsyncClick }: Props) => {
	return (
		<button className={styles.button} onClick={!onClick ? onAsyncClick : onClick}>
			{children}
		</button>
	);
};

export default Button;
