import App from '@/components/app';
import store from '@/store';
import { fetchData, fetchFilter } from '@/store/actions';

const FILTER_NAME = 'ratecodeid';

const body = document.querySelector('body');

async function render(state) {
  body.innerHTML = await App(state);
}

render(store.getState());
store.subscribe(render);

store.dispatch(fetchData());
store.dispatch(fetchFilter(FILTER_NAME));
