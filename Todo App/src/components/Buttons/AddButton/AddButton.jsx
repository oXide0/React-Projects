import './AddButton.scss';

export default function AddButton(props) {
	return (
		<div>
			<button className='add__btn' onClick={props.onClick}>
				{props.children}
			</button>
		</div>
	);
}
