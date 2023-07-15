import { IImage } from '../types/types';

interface ImageProps {
	image: IImage;
}

const Image = ({ image }: ImageProps) => {
	const url = 'https://farm66.staticflickr.com/' + image.server + '/' + image.id + '_' + image.secret + '.jpg';
	return (
		<div className='block__img'>
			<img src={url} alt={image.title} className='img' />
		</div>
	);
};

export default Image;
