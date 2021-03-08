import './index.css';
import eventHandler from './eventHandler';

const Filters = ({ name, values, selected }, applyFilter) => {
  const onChange = (event) => {
    const { target } = event;
    if (target.id === name) {
      const { value } = target;

      applyFilter({ name, value });
    }
  };

  eventHandler.addOnChangeTrigger(name, onChange);

  return `
  <div class="dropdown">
    <label class="dropdown__label" for="${name}">
      ${name}
    </label>
    <select required class="dropdown__select" name="${name}" id="${name}">
      <option value placeholder>Select option</option>
      ${values
        .map((option) => {
          const isSelected = option === parseInt(selected) ? 'selected' : '';

          return `<option value="${option}" ${isSelected}>${option}</option>`;
        })
        .join('')}
    </select>
  </div>`;
};

export default Filters;
