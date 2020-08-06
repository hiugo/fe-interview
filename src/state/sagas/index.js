// API DATA Saga
import { all } from 'redux-saga/effects';

import { watchBillsRequest } from './bills';

export default function * rootSaga() {
    yield all([
        watchBillsRequest(),
    ]);
}
