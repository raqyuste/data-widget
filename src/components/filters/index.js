import './index.css';

const Filters = ({ name, values, selected }) => {
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
