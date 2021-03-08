import TinybirdService from '@/service';
import store from '@/store';
import {
  fetchDataSuccess,
  fetchFilterSuccess,
  fetchError,
} from '@/store/actions';
import * as types from '@/store/constants';

const getData = (filter, service) => {
  return Promise.all([
    service.getAmout(filter),
    service.getAmoutByVendor(filter),
  ]).then((result) => Object.assign({}, ...result));
};

const makeCall = async (action, service) => {
  if (action.type === types.FETCH_DATA_REQUESTED) {
    const data = await getData(action.filter, service);

    return store.dispatch(fetchDataSuccess(data));
  }
  if (action.type === types.FETCH_FILTER_REQUESTED) {
    const filterValues = await service.getFilterValues(action.name);

    return store.dispatch(fetchFilterSuccess(filterValues));
  }
};

const apiMiddleware = async (action) => {
  try {
    const service = TinybirdService();

    return makeCall(action, service);
  } catch (error) {
    store.dispatch(fetchError());
  }
};

export default apiMiddleware;
