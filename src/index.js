import App from '@/components/app';

const body = document.querySelector('body');

async function render(state) {
  body.innerHTML = await App(state);
}

render({
  data: {
    amount: 1234567,
    filter: {name: 'ratecodeid', values: [1,2,3]},
    isLoadingData: false,
    isError: false,
  }
});