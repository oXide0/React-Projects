import { IImage } from '../types/types';
import Image from './Image';

interface GalleryProps {
	images: IImage[];
	success: boolean;
}

const Gallery = ({ images, success }: GalleryProps) => {
	return (
		<div className='gallery'>
			{!images.length && success ? (
				<h2 className='no__images'>No Images Found</h2>
			) : (
				images.map((image: IImage) => <Image key={image.id} image={image} />)
			)}
		</div>
	);
};

export default Gallery;
