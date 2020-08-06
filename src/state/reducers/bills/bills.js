import {
    BILLS_FAIL,
    BILLS_REQUEST,
    BILLS_SUCCESS,
} from '../../actions/bills';

// Initial State
export const initialState = {
    data: null,
    error: null,
    loading: false,
    request: null,
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

    default:
        return state;
    }
}

export default bills;
