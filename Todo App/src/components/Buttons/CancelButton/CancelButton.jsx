import './CancelButton.scss';

export default function CancleButton(props) {
	return (
		<div>
			<button className='cancel__btn' onClick={props.onClick}>
				{props.children}
			</button>
		</div>
	);
}
