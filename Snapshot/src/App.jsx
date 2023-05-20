import { apiKey } from './api/api.js';
import { useState } from 'react';
import Form from './components/Form/Form.jsx';
import './App.css';
import CategoryButton from './components/CategoryButton/CategoryButton.jsx';
import Gallery from './components/Gallery/Gallery.jsx';

function App() {
	const [images, setImages] = useState();
	const [searchedValue, setSearchedValue] = useState('');

	const runSearch = async (value) => {
		try {
			const response = await fetch(
				`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${value}&per_page=24&format=json&nojsoncallback=1`
			);
			const data = await response.json();
			setImages(data.photos.photo);
			if (data.photos.photo.length === 0) {
				setSearchedValue('No Images Found');
			} else {
				setSearchedValue(value);
			}
		} catch (err) {
			console.error(err);
			setSearchedValue('Page Not Found');
		}
	};

	return (
		<div className='wrapper'>
			<div className='content'>
				<h1 className='title'>
					<button
						className='title__btn'
						onClick={() => {
							window.location.reload(false);
						}}
					>
						SnapShot
					</button>
				</h1>
				<Form runSearch={runSearch} />
				<div className='buttons'>
					<CategoryButton runSearch={runSearch}>Mountains</CategoryButton>
					<CategoryButton runSearch={runSearch}>Flowers</CategoryButton>
					<CategoryButton runSearch={runSearch}>Birds</CategoryButton>
					<CategoryButton runSearch={runSearch}>Forest</CategoryButton>
				</div>
				<h2 className='subtitle'>{searchedValue}</h2>
				<Gallery data={images} />
			</div>
		</div>
	);
}

export default App;
