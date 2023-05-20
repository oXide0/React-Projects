function CategoryButton(props) {
	return (
		<div className='category'>
			<button className='category__btn' onClick={() => props.runSearch(props.children)}>
				{props.children}
			</button>
		</div>
	);
}

export default CategoryButton;
