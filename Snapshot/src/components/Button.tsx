import { ReactNode } from 'react';

interface ButtonProps {
	children: ReactNode;
	onClick: () => void;
}

const Button = ({ children, onClick }: ButtonProps) => {
	return (
		<button className='button' onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;
