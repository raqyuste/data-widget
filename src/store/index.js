import reducer from './reducer';
import apiMiddleware from '../middlewares';

const defaultState = {
  isLoadingData: false,
};

export function setupStore(initialState) {
  let state = initialState || {};
  const subscribers = [];

  return {
    getState: () => state,
    subscribe: (sub) => subscribers.push(sub),
    dispatch: (action) => {
      state = reducer(state, action);
      apiMiddleware(action);

      subscribers.forEach((subscriber) => subscriber(state));
    },
  };
}

export default setupStore(defaultState);
