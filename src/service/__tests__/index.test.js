import TinybirdService from '../index';
import tinybirdMock from 'tinybird.js';

jest.mock('tinybird.js', () => jest.fn());

describe('Service', () => {
  test('create the Service', () => {
    tinybirdMock.mockReturnValue({
      pipe: jest.fn(),
    });

    TinybirdService();

    expect(tinybirdMock).toHaveBeenCalled();
    expect(tinybirdMock().pipe).toHaveBeenCalled();
  });

  test('getAmout success', async () => {
    const data = 'test';

    tinybirdMock.mockReturnValue({
      pipe: jest.fn().mockReturnValue({
        single: jest.fn().mockReturnValue(data),
      }),
    });

    const service = TinybirdService();
    const res = await service.getAmout();

    expect(tinybirdMock().pipe().single).toHaveBeenCalled();
    expect(res).toEqual({ amount: data });
  });

  test('getAmout error', async () => {
    tinybirdMock.mockReturnValue({
      pipe: jest.fn().mockReturnValue({
        single: jest.fn().mockReturnValue({ error: 'error message' }),
      }),
    });

    const service = TinybirdService();

    expect(service.getAmout()).rejects.toThrow('error message');
  });

  test('getAmoutByVendor success', async () => {
    const data = 'test';

    tinybirdMock.mockReturnValue({
      pipe: jest.fn().mockReturnValue({
        json: jest.fn().mockReturnValue({ data }),
      }),
    });

    const service = TinybirdService();
    const res = await service.getAmoutByVendor();

    expect(tinybirdMock().pipe().json).toHaveBeenCalled();
    expect(res).toEqual({ amountByVendor: data });
  });

  test('getAmoutByVendor error', async () => {
    tinybirdMock.mockReturnValue({
      pipe: jest.fn().mockReturnValue({
        json: jest.fn().mockReturnValue({ error: 'error message' }),
      }),
    });

    const service = TinybirdService();

    expect(service.getAmoutByVendor()).rejects.toThrow('error message');
  });

  test('getFilterValues success', async () => {
    const name = 'name';
    const values = ['value'];

    tinybirdMock.mockReturnValue({
      pipe: jest.fn().mockReturnValue({
        json: jest.fn().mockReturnValue({ data: [{ name: 'value' }] }),
      }),
    });

    const service = TinybirdService();
    const res = await service.getFilterValues(name);

    expect(tinybirdMock().pipe().json).toHaveBeenCalled();
    expect(res).toEqual({ name, values });
  });

  test('getFilterValues error', async () => {
    tinybirdMock.mockReturnValue({
      pipe: jest.fn().mockReturnValue({
        json: jest.fn().mockReturnValue({ error: 'error message' }),
      }),
    });

    const service = TinybirdService();

    expect(service.getFilterValues()).rejects.toThrow('error message');
  });
});
