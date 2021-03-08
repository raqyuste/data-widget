import {
  fetchData,
  fetchDataSuccess,
  fetchFilter,
  fetchFilterSuccess,
  fetchError,
  selectFilterValue,
} from '../actions';

describe('actions', () => {
  it('should call `fetchData` and return an object with the right type', () => {
    const expected = { type: 'FETCH_DATA_REQUESTED' };

    expect(fetchData()).toEqual(expected);
  });

  it('should call `fetchDataSuccess` and return an object with the right type', () => {
    const expected = { type: 'FETCH_DATA_SUCCESS', data: { key: 'value' } };

    expect(fetchDataSuccess({ key: 'value' })).toEqual(expected);
  });

  it('should call `fetchFilter` and return an object with the right type', () => {
    const expected = { type: 'FETCH_FILTER_REQUESTED', name: 'name' };

    expect(fetchFilter('name')).toEqual(expected);
  });

  it('should call `fetchFilterSuccess` and return an object with the right type', () => {
    const expected = { type: 'FETCH_FILTER_SUCCESS', filter: { key: 'value' } };

    expect(fetchFilterSuccess({ key: 'value' })).toEqual(expected);
  });
  it('should call `fetchError` and return an object with the right type', () => {
    const expected = { type: 'FETCH_ERROR' };

    expect(fetchError()).toEqual(expected);
  });
  it('should call `selectFilterValue` and return an object with the right type', () => {
    const expected = { type: 'SELECT_FILTER_VALUE', selected: 1 };

    expect(selectFilterValue(1)).toEqual(expected);
  });
});
