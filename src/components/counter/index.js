import './index.css';

const Counter = (number) => {
  return `
    <div class="counter">
      ${number.toFixed(2)}
    </div>`;
};

export default Counter;
