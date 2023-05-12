import style from './Input.module.scss';

export default function Input({ theme, value, setValue }) {
	return (
		<div className={style.input}>
			<input
				type='text'
				className={theme === 'dark' ? `${style.input_field}` : `${style.input_field} ${style.black_color}`}
				value={value}
				onChange={() => setValue(value)}
			/>
		</div>
	);
}
