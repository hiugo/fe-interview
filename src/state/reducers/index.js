import { combineReducers } from 'redux';

import bills from './bills';

const appReducer = combineReducers({
    bills,
});

const rootReducer = (state, action) => {
    return appReducer(state, action);
};

export default rootReducer;
