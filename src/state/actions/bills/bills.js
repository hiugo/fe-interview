export const BILLS_REQUEST = 'BILLS_REQUEST';
export const BILLS_SUCCESS = 'BILLS_SUCCESS';
export const BILLS_FAIL = 'BILLS_FAIL';

export const UPDATE_BILL_REQUEST = 'UPDATE_BILL_REQUEST';
export const UPDATE_BILL_SUCCESS = 'UPDATE_BILL_SUCCESS';
export const UPDATE_BILL_FAIL = 'UPDATE_BILL_FAIL';

export const billsRequest = (params) => ({ type: BILLS_REQUEST, payload: params });
export const billsSuccess = (data) => ({ type: BILLS_SUCCESS, payload: data });
export const billsFailed = (error) => ({ type: BILLS_FAIL, payload: error });

export const updateBillRequest = (params) => ({ type: UPDATE_BILL_REQUEST, payload: params });
export const updateBillSuccess = (data) => ({ type: UPDATE_BILL_SUCCESS, payload: data });
export const updateBillFailed = (error) => ({ type: UPDATE_BILL_FAIL, payload: error });
