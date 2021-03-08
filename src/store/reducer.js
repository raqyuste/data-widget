import * as types from './constants';

export default function reducer(state, action) {
  switch (action.type) {
    case types.FETCH_DATA_REQUESTED:
      return { ...state, isLoadingData: true };

    case types.FETCH_DATA_SUCCESS:
      return { ...state, isLoadingData: false, data: action.data };

    case types.FETCH_FILTER_SUCCESS:
      return { ...state, filter: action.filter };

    case types.FETCH_ERROR:
      return { ...state, isError: true };

    case types.SELECT_FILTER_VALUE: {
      const filter = { ...state.filter, selected: action.selected };

      return { ...state, filter };
    }

    default:
      return state;
  }
}
