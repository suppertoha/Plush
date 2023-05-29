const container = document.querySelector('.input-container');

if (container) {
  const inputFields = container.querySelectorAll('.input-number');

  inputFields.forEach((field, index) => {
    field.addEventListener('input', () => {
      const currentValue = field.value;
      const regex = /^\d{0,1}$/;

      if (!regex.test(currentValue)) {
        field.value = '';
      }

      if (currentValue.length === 1) {
        if (index < inputFields.length - 1) {
          inputFields[index + 1].focus();
          inputFields[index + 1].select();
        } else {
          field.blur();
        }
        const item = document.querySelector(`.info-modal__item:nth-child(${index + 1})`);
        item.classList.add('active');
      } else {
        const item = document.querySelector(`.info-modal__item:nth-child(${index + 1})`);
        item.classList.remove('active');
      }
    });

    field.addEventListener('keydown', (e) => {
      if (e.keyCode === 8 && field.value === '') {
        if (index > 0) {
          inputFields[index - 1].focus();
          inputFields[index - 1].select();
        }
      }
    });
  });
}
