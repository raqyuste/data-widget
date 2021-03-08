import * as mockActions from '@/store/actions';
import TinybirdServiceMock from '@/service';
import middleware from '../index';

jest.mock('@/store/actions');
jest.mock('@/store');
jest.mock('@/service');

TinybirdServiceMock.mockReturnValue({
  getAmout: jest.fn().mockReturnValue(Promise.resolve({})),
  getAmoutByVendor: jest.fn().mockResolvedValue(Promise.resolve({})),
  getFilterValues: jest.fn().mockReturnValue(Promise.resolve({})),
});

describe('middleware', () => {
  it('should avoid wrong actions', async () => {
    await middleware({ type: 'test' });

    expect(mockActions.fetchFilterSuccess).toHaveBeenCalledTimes(0);
    expect(mockActions.fetchDataSuccess).toHaveBeenCalledTimes(0);
  });

  it('should dispatch `fetchDataSuccess`', async () => {
    const data = [];
    await middleware({ type: 'FETCH_DATA_REQUESTED', data });

    expect(TinybirdServiceMock().getAmout).toHaveBeenCalled();
    expect(TinybirdServiceMock().getAmoutByVendor).toHaveBeenCalled();
    expect(mockActions.fetchDataSuccess).toHaveBeenCalled();
  });

  it('should dispatch `fetchFilterSuccess`', async () => {
    const data = [];
    await middleware({ type: 'FETCH_FILTER_REQUESTED', data });

    expect(TinybirdServiceMock().getFilterValues).toHaveBeenCalled();
    expect(mockActions.fetchFilterSuccess).toHaveBeenCalled();
  });
});
