import {
	CATEGORIES_FAIL,
	CATEGORIES_REQUEST,
	CATEGORIES_SUCCESS,
} from '../../actions/categories';

// Initial State
export const initialState = {
	data: null,
	error: null,
	loading: false,
	request: null,
};

// Reducer
function categories(state = initialState, action) {
	switch (action.type) {
	case CATEGORIES_REQUEST:
		return {
			...state,
			request: 'PENDING',
			loading: true,
		};

	case CATEGORIES_SUCCESS:
		return {
			...state,
			data: action.payload,
			request: 'SUCCESS',
			loading: false,
			error  : null,
		};

	case CATEGORIES_FAIL:
		return {
			...state,
			request: 'FAIL',
			loading: false,
			error  : action.payload || 'error',
		};

	default:
		return state;
	}
}

export default categories;
