const checkboxes = document.querySelectorAll('[data-validate-type="checkbox"]');

const onCheckboxKeydown = (evt) => {
  const node = evt.target;
  const input = node.querySelector('input[type="checkbox"]');
  if (evt.key === ' ') {
    if (input.checked) {
      input.removeAttribute('checked');
    } else {
      input.setAttribute('checked', true);
    }
  }
};

const initCheckboxes = () => {
  for (const checkbox of checkboxes) {
    checkbox.addEventListener('keydown', (evt) => onCheckboxKeydown(evt));
  }
};

export {initCheckboxes};
