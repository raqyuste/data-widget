import * as types from './constants';

export function fetchData(filter) {
  return {
    type: types.FETCH_DATA_REQUESTED,
    filter,
  };
}

export function fetchDataSuccess(data) {
  return {
    type: types.FETCH_DATA_SUCCESS,
    data,
  };
}

export function fetchFilter(name) {
  return {
    type: types.FETCH_FILTER_REQUESTED,
    name,
  };
}

export function fetchFilterSuccess(filter) {
  return {
    type: types.FETCH_FILTER_SUCCESS,
    filter,
  };
}

export function fetchError() {
  return {
    type: types.FETCH_ERROR,
  };
}

export function selectFilterValue(selected) {
  return {
    type: types.SELECT_FILTER_VALUE,
    selected,
  };
}
