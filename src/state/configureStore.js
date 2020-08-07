import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';
import rootSaga from './sagas';

export const configureStore = (initialState = {}) => {
	const sagaMiddleware = createSagaMiddleware();

	const store = createStore(
		rootReducer,
		initialState,
		applyMiddleware(sagaMiddleware)
	);

	store.sagaTask = sagaMiddleware.run(rootSaga);

	return store;
};
