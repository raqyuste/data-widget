export function eventHandler() {
  const onChange = {};

  document.body.addEventListener('change', (event) => {
    Object.values(onChange).forEach((trigger) => {
      trigger(event);
    });
  });

  return {
    addOnChangeTrigger: (name, trigger) => {
      onChange[name] = trigger;
    },
  };
}

export default eventHandler();
