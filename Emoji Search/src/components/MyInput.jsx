import './MyInput.css';

function Myinput(props) {
	return (
		<div className='form__group field'>
			<input
				type='input'
				className={props.theme === 'dark' ? 'form__field dark_form' : 'form__field light_form'}
				placeholder='Emoji'
				id='name'
				required
				autoComplete='off'
				{...props}
			/>
			<label htmlFor='name' className='form__label'>
				Emoji
			</label>
		</div>
	);
}

export default Myinput;
