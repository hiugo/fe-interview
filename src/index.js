import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.scss';
import App from './App';
import { configureStore } from './state/configureStore';

const store = configureStore();

ReactDOM.render((
	<Provider store={store}>
		<App />
	</Provider>
), document.getElementById('root')
);