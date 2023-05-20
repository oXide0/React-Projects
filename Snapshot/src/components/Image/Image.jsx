function Image({ photo }) {
	const url = 'https://farm66.staticflickr.com/' + photo.server + '/' + photo.id + '_' + photo.secret + '.jpg';
	return (
		<div className='result'>
			<img src={url} alt={photo.title} className='result__image' />
		</div>
	);
}

export default Image;
