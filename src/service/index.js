import tinybird from 'tinybird.js';

const TB_TOKEN =
  'p.eyJ1IjogIjdmOTIwMmMzLWM1ZjctNDU4Ni1hZDUxLTdmYzUzNTRlMTk5YSIsICJpZCI6ICJmZTRkNWFiZS05ZWIyLTRjMjYtYWZiZi0yYTdlMWJlNDQzOWEifQ.P67MfoqTixyasaMGH5RIjCrGc0bUKvBoKMwYjfqQN8c';
const PIPE_NAME = 'yellow_tripdata_2017_pipe';

const TinybirdService = () => {
  const tinyb = tinybird(TB_TOKEN);
  const pipe = tinyb.pipe(PIPE_NAME);

  const applyFilter = (filter) =>
    filter ? `WHERE ${filter.name} = ${filter.value}` : '';
  const throwError = (error) => {
    throw new Error(error);
  };

  return {
    async getAmout(filter) {
      const where = applyFilter(filter);
      const query = `SELECT SUM(total_amount) as total_amount FROM _ ${where}`;
      const res = await pipe.single(query);

      res.error && throwError(res.error);

      return { amount: res };
    },
    async getAmoutByVendor(filter) {
      const where = applyFilter(filter);
      const query = `SELECT vendorid, SUM(total_amount) as total_amount FROM _ ${where} GROUP BY vendorid`;
      const res = await pipe.json(query);

      res.error && throwError(res.error);

      return { amountByVendor: res.data };
    },
    async getFilterValues(name) {
      const query = `SELECT DISTINCT ${name} FROM _ `;
      const res = await pipe.json(query);

      res.error && throwError(res.error);
      const values = res.data.map((value) => value[name]);

      return { name, values };
    },
  };
};

export default TinybirdService;
