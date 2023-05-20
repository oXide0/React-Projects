import Image from '../Image/Image.jsx';

function Gallery({ data }) {
	return (
		<div className='gallery'>
			{data === undefined ? '' : data.map((photo) => <Image key={photo.id} photo={photo} />)}
		</div>
	);
}

export default Gallery;
