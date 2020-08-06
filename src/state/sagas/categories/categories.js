import {
	call,
	put,
	select,
	takeLatest,
} from 'redux-saga/effects';

import axios from 'axios';

import { APIConstants } from '../../../shared/constants';

// Actions
import {
	CATEGORIES_REQUEST,
	categoriesFailed,
	categoriesSuccess,
} from '../../actions/categories';

const CATEGORIES_ENDPOINT = APIConstants.base;

export function * watchCategoriesRequest() {
	yield takeLatest(CATEGORIES_REQUEST, initCategoriesRequest);
}

function * initCategoriesRequest() {
	try {
		const { data } = yield call(fetchCategories);

		yield put(categoriesSuccess(data));
	} catch (error) {
		yield put(categoriesFailed(error.message));
	}
}

export async function fetchCategories() {
	const response = axios.get(`${CATEGORIES_ENDPOINT}/categories`);

	return response;
}
