import style from './Theme.module.scss';

export default function Theme({ theme, changeTheme }) {
	function getImageUrl(theme) {
		return 'img/' + theme + '_toggle' + '.svg';
	}

	return (
		<div className={style.theme}>
			<button className={style.theme__button} onClick={changeTheme}>
				<img src={getImageUrl(theme)} alt='theme' />
			</button>
		</div>
	);
}
