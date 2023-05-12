import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import Field from './components/field/Field.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<div className='wrapper'>
			<Field />
		</div>
	</React.StrictMode>
);
