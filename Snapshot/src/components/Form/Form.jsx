import { useState } from 'react';
import style from './Form.module.css';

function Form({ runSearch }) {
	const [input, setInput] = useState('');

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				runSearch(input);
			}}
			role='search'
			className={style.content__form}
		>
			<input
				id='search'
				type='search'
				placeholder='Search...'
				autoFocus
				required
				autoComplete='off'
				className={style.search__input}
				onChange={(e) => setInput(e.target.value)}
				value={input}
			/>
			<button type='submit' className={style.form__btn}>
				Go
			</button>
		</form>
	);
}

export default Form;
