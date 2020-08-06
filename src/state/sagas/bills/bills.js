import {
    call,
    put,
    select,
    takeLatest,
} from 'redux-saga/effects';

import axios from 'axios';

import { APIConstants } from '../../../shared/constants'

// Actions
import {
    BILLS_REQUEST,
    billsFailed,
    billsSuccess,
} from '../../actions/bills';

const BILLS_ENDPOINT = APIConstants.base;

export function * watchBillsRequest() {
    yield takeLatest(BILLS_REQUEST, initBillsRequest);
}

function * initBillsRequest(action) {
    try {
        const params = action.payload;
        const { data } = yield call(fetchBills, params);

        yield put(billsSuccess(data));
    } catch (error) {
        yield put(billsFailed(error.message));
    }
}

export async function fetchBills(params) {
    const response = axios.get(`${BILLS_ENDPOINT}/bills`);

    return response;
}
