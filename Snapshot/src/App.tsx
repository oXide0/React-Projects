import './App.css';
import Button from './components/Button';
import { useState } from 'react';
import axios from 'axios';
import Gallery from './components/Gallery';
import { IImage, Idata } from './types/types';
const apiKey = import.meta.env.VITE_API_KEY as string;

const App = () => {
	const [searchValue, setSearchValue] = useState('');
	const [title, setTitle] = useState('');
	const [success, setSuccess] = useState(false);
	const [images, setImages] = useState<IImage[]>([]);

	const fetchImages = async (value: string) => {
		if (!value) return alert('Please enter a search term');
		try {
			const response: Idata = await axios.get(
				`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${value}&per_page=24&format=json&nojsoncallback=1`
			);
			setImages(response.data.photos.photo);
			setTitle(value);
			setSuccess(true);
		} catch (error) {
			alert(error);
		}
	};

	const handleClick = async (title: string) => {
		setSearchValue(title);
		await fetchImages(title);
	};

	return (
		<div className='wrapper'>
			<h1 className='title'>SnapShot</h1>
			<div className='form'>
				<input
					type='text'
					className='form__input'
					value={searchValue}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value)}
				/>
				<button className='search__btn' onClick={() => fetchImages(searchValue)}>
					Search
				</button>
			</div>
			<div className='buttons'>
				<Button onClick={() => handleClick('Mountain')}>Mountain</Button>
				<Button onClick={() => handleClick('Beaches')}>Beaches</Button>
				<Button onClick={() => handleClick('Birds')}>Birds</Button>
				<Button onClick={() => handleClick('Food')}>Food</Button>
			</div>
			<h2 className='subtitle'>{title} Pictures</h2>
			<Gallery images={images} success={success} />
		</div>
	);
};

export default App;
