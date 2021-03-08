import './index.css';
import Counter from '@/components/counter';
import Chart from '@/components/chart';

const Widget = ({ title, counterData, chartData }) => {
  return `
    <div class="widget">
      <h2 class="widget__title">${title}</h2>
      ${Counter(counterData)}
      ${Chart(chartData, 'total_amount', 'vendorid')}
    </div>`;
};

export default Widget;
