import reducer from '../reducer';

const buildState = (state) => ({
  isLoadingData: false,
  isError: false,
  ...state,
});

describe('reducer', () => {
  it('should return default state', () => {
    const action = { type: 'test' };
    const currentState = buildState();

    expect(reducer(currentState, action)).toEqual(currentState);
  });

  it('should return correct state for action `FETCH_DATA_REQUESTED`', () => {
    const action = { type: 'FETCH_DATA_REQUESTED' };
    const currentState = buildState();
    const expectedState = buildState({ isLoadingData: true });

    expect(reducer(currentState, action)).toEqual(expectedState);
  });

  it('should return correct state for action `FETCH_DATA_SUCCESS`', () => {
    const data = { key: 'value' };
    const action = { type: 'FETCH_DATA_SUCCESS', data };
    const currentState = buildState({ isLoadingData: true });
    const expectedState = buildState({ isLoadingData: false, data });

    expect(reducer(currentState, action)).toEqual(expectedState);
  });

  it('should return correct state for action `FETCH_FILTER_SUCCESS`', () => {
    const filter = { key: 'value' };
    const action = { type: 'FETCH_FILTER_SUCCESS', filter };
    const currentState = buildState();
    const expectedState = buildState({ filter });

    expect(reducer(currentState, action)).toEqual(expectedState);
  });

  it('should return correct state for action `FETCH_ERROR`', () => {
    const action = { type: 'FETCH_ERROR' };
    const currentState = buildState();
    const expectedState = buildState({ isError: true });

    expect(reducer(currentState, action)).toEqual(expectedState);
  });

  it('should return correct state for action `SELECT_FILTER_VALUE`', () => {
    const selected = 1;
    const action = { type: 'SELECT_FILTER_VALUE', selected };
    const currentState = buildState();
    const expectedState = buildState({ filter: { selected } });

    expect(reducer(currentState, action)).toEqual(expectedState);
  });
});
