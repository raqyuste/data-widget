import './index.css';

import store from '@/store';
import { fetchData, selectFilterValue } from '@/store/actions';

import Widget from '@/components/widget';
import Filters from '@/components/filters';
import Loader from '@/components/loader';

const WIDGET_TITLE = 'Total amount';

const onApplyFilter = (query) => {
  store.dispatch(selectFilterValue(query.value));
  store.dispatch(fetchData(query));
};

const App = ({ isError, isLoadingData, filter, data }) => {
  return isError
    ? `<div>Uppss! There is a problem loading the data.</div>`
    : `<main class="page">
      <section class="filters">
        <h2 class="filters__title">Filter by</h2>
        ${filter ? Filters(filter, onApplyFilter) : ''}
      </section>
      <section class="data">
      ${
        isLoadingData
          ? Loader()
          : data
          ? Widget({
              title: WIDGET_TITLE,
              counterData: data.amount,
              chartData: data.amountByVendor,
            })
          : ''
      }
      </section>
    </main>`;
};

export default App;
