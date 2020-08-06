// API DATA Saga
import { all } from 'redux-saga/effects';

import { watchBillsRequest } from './bills';
import { watchCategoriesRequest } from './categories';

export default function * rootSaga() {
	yield all([
		watchBillsRequest(),
		watchCategoriesRequest(),
	]);
}
