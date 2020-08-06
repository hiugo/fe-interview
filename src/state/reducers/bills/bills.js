import {
	BILLS_FAIL,
	BILLS_REQUEST,
	BILLS_SUCCESS,
	UPDATE_BILL_FAIL,
	UPDATE_BILL_REQUEST,
	UPDATE_BILL_SUCCESS,
} from '../../actions/bills';

// Initial State
export const initialState = {
	data: null,
	error: null,
	loading: false,
	request: null,
	updateError: null,
	updateLoading: false,
	updateRequest: null,
};

// Reducer
function bills(state = initialState, action) {
	switch (action.type) {
	case BILLS_REQUEST:
		return {
			...state,
			request: 'PENDING',
			loading: true,
		};

	case BILLS_SUCCESS:
		return {
			...state,
			data: action.payload,
			request: 'SUCCESS',
			loading: false,
			error  : null,
		};

	case BILLS_FAIL:
		return {
			...state,
			request: 'FAIL',
			loading: false,
			error  : action.payload || 'error',
		};
        
	case UPDATE_BILL_REQUEST:
		return {
			...state,
			updateRequest: 'PENDING',
			updateLoading: true,
		};

	case UPDATE_BILL_SUCCESS:
		return {
			...state,
			data: state.data.map(bill =>
				bill.id === action.payload ? {
					...bill,
					isBill: !bill.isBill
				} : bill
			),
			updateRequest: 'SUCCESS',
			updateLoading: false,
			updateError  : null,
		};

	case UPDATE_BILL_FAIL:
		return {
			...state,
			updateRequest: 'FAIL',
			updateLoading: false,
			updateError  : action.payload || 'error',
		};

	default:
		return state;
	}
}

export default bills;
