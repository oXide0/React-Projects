import Emoji from './Emoji';

function EmojiList({ list }) {
	if (!list) {
		return <h1 className='title notfound__title'>Emojis not found!</h1>;
	}

	return (
		<div className='list'>
			{list.map((item) => (
				<Emoji key={self.crypto.randomUUID()} symbol={item.symbol} title={item.title} />
			))}
		</div>
	);
}

export default EmojiList;
