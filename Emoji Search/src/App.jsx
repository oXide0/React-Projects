import emojiData from './data/emojiList.json';
import { useMemo, useState } from 'react';
import Myinput from './components/MyInput';
import EmojiList from './components/EmojiList';

function App() {
	const [theme, setTheme] = useState('dark');
	const [searchQuery, setSearchQuery] = useState('');

	const searchedEmoji = useMemo(() => {
		if (searchQuery) {
			return emojiData.filter((emoji) => emoji.title.toLocaleLowerCase().includes(searchQuery));
		}
		return emojiData.filter((_, index) => index < 20);
	}, [searchQuery]);

	return (
		<div className={theme === 'dark' ? 'wrapper dark' : 'wrapper light'}>
			<button className='theme__btn' onClick={() => (theme === 'dark' ? setTheme('light') : setTheme('dark'))}>
				{theme === 'dark' ? <img src='img/light_mode.svg' alt='' /> : <img src='img/night_mode.svg' alt='' />}
			</button>
			<h1 className='title'>😋 Emoji Search 🔎</h1>
			<Myinput theme={theme} value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
			<EmojiList list={searchedEmoji} />
		</div>
	);
}

export default App;
