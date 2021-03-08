import './index.css';

const getRandomColor = () => {
  return 'hsl(' + Math.random() * 360 + ', 100%, 75%)';
};

const Bar = (percentage, label) => {
  return `
    <div class="bar">
      <div class="bar__fill" style="width:${percentage}%; background:${getRandomColor()}">
          ${label}
      </div>
      <span class="bar__percentage">
        ${percentage.toFixed(2)}%
      </span>
    </div>`;
};

const Chart = (data, valueId, labelId) => {
  const total = data.reduce((acc, row) => acc + row[valueId], 0);
  const hydratedData = data.map((row) => {
    const label = `${labelId}: ${row[labelId]}`;
    const percentage = (row[valueId] / total) * 100;

    return { label, percentage };
  });

  return `
    <div class="chart">
      ${hydratedData.map((row) => Bar(row.percentage, row.label)).join('')}
    </div>`;
};

export default Chart;
