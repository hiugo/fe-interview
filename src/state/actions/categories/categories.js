export const CATEGORIES_REQUEST = 'CATEGORIES_REQUEST';
export const CATEGORIES_SUCCESS = 'CATEGORIES_SUCCESS';
export const CATEGORIES_FAIL = 'CATEGORIES_FAIL';

export const categoriesRequest = (params) => ({ type: CATEGORIES_REQUEST, payload: params });
export const categoriesSuccess = (data) => ({ type: CATEGORIES_SUCCESS, payload: data });
export const categoriesFailed = (error) => ({ type: CATEGORIES_FAIL, payload: error });
