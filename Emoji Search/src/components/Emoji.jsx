function Emoji({ symbol, title }) {
	return (
		<div>
			<div className='emoji__row' onClick={() => navigator.clipboard.writeText(symbol)}>
				<span className='emoji__symbol'>
					{symbol} {title}
				</span>
			</div>
			<div className='border'></div>
		</div>
	);
}

export default Emoji;
