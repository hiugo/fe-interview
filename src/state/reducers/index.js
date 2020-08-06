import { combineReducers } from 'redux';

import bills from './bills';
import categories from './categories';

const appReducer = combineReducers({
	bills,
	categories,
});

const rootReducer = (state, action) => {
	return appReducer(state, action);
};

export default rootReducer;
