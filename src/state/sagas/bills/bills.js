import {
	call,
	put,
	takeLatest,
} from 'redux-saga/effects';

import axios from 'axios';

import { APIConstants } from '../../../shared/constants';

// Actions
import {
	BILLS_REQUEST,
	billsFailed,
	billsSuccess,
	UPDATE_BILL_REQUEST,
	updateBillSuccess,
	updateBillFailed,
} from '../../actions/bills';

const BILLS_ENDPOINT = APIConstants.base;

export function * watchBillsRequest() {
	yield takeLatest(BILLS_REQUEST, initBills);
	yield takeLatest(UPDATE_BILL_REQUEST, initUpdateBill);
}

function * initBills() {
	try {
		const { data } = yield call(fetchBills);

		yield put(billsSuccess(data));
	} catch (error) {
		yield put(billsFailed(error.message));
	}
}

export async function fetchBills() {
	const response = axios.get(`${BILLS_ENDPOINT}/bills`);

	return response;
}

function * initUpdateBill(action) {
	try {
		const params = action.payload;
		yield call(updateBill, params);

		yield put(updateBillSuccess(params.id));
	} catch (error) {
		yield put(updateBillFailed(error.message));
	}
}

export async function updateBill({ id }) {
	const response = axios.patch(`${BILLS_ENDPOINT}/bills/${id}`);

	return response;
}
