import { setupStore } from '../index';
import apiMiddlewareMock from '@/middlewares';
import reducerMock from '@/store/reducer';

jest.mock('@/middlewares', () => jest.fn());
jest.mock('@/store/reducer', () => jest.fn());

describe('Store', () => {
  const action = { type: 'test' };

  test('should expose required methods', () => {
    const store = setupStore();

    expect(store.getState).toBeInstanceOf(Function);
    expect(store.subscribe).toBeInstanceOf(Function);
  });

  test('should subscribe a container and then dispatch an action', () => {
    const store = setupStore();
    const mockContainer = jest.fn();

    store.subscribe(mockContainer);
    store.dispatch(action);

    expect(apiMiddlewareMock).toHaveBeenCalled();
    expect(reducerMock).toHaveBeenCalled();
    expect(mockContainer).toHaveBeenCalled();
  });

  test('should return state', () => {
    const store = setupStore();

    expect(store.getState()).toBeInstanceOf(Object);
  });
});
