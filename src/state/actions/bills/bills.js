export const BILLS_REQUEST = 'BILLS_REQUEST';
export const BILLS_SUCCESS = 'BILLS_SUCCESS';
export const BILLS_FAIL = 'BILLS_FAIL';

export const billsRequest = (params) => ({ type: BILLS_REQUEST, payload: params });
export const billsSuccess = (data) => ({ type: BILLS_SUCCESS, payload: data });
export const billsFailed = (error) => ({ type: BILLS_FAIL, payload: error });
