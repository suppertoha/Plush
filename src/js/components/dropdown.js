  //! dropdown
  document.querySelectorAll('.dropdown').forEach(function (dropdownWrapper) {
    //! Переменные
    const dropdownListItem = dropdownWrapper.querySelectorAll('.dropdown__list-item');
    const inputElement = dropdownWrapper.querySelector('.dropdown__input-hidden');
    const dropdownButton = dropdownWrapper.querySelector('.dropdown__button span');
    const dropdownBtn = dropdownWrapper.querySelector('.dropdown__button');
    const dropdownList = dropdownWrapper.querySelector('.dropdown__list');

    //! Добавление класса visible dropdown. И кнопки класса active
    dropdownButton.addEventListener('click', function () {
      dropdownList.classList.toggle('visible');
      dropdownBtn.classList.toggle('active');
      dropdownBtn.classList.remove('color');
      this.classList.toggle('active');
    });

    //! Выбор элемента списка. Передача выбранного значение и закрытие dropdown
    dropdownListItem.forEach(function (listItem) {
      listItem.addEventListener('click', function (e) {
        e.stopPropagation();
        dropdownButton.innerText = this.innerText;
        dropdownButton.focus();
        inputElement.value = this.dataset.value;
        dropdownList.classList.remove('visible');
        dropdownButton.classList.remove('active');
        dropdownButton.classList.add('icon');
        dropdownBtn.classList.remove('active');
        dropdownBtn.classList.add('color');
      });
    });

    //! Закрытие dropdown по клику на любой элемент
    document.addEventListener('click', function (e) {
      if (e.target !== dropdownButton) {
        dropdownList.classList.remove('visible');
        dropdownButton.classList.remove('active');
        dropdownBtn.classList.remove('active');
      }
    });

    //! Закрытие dropdown по кнопке tab или escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Tab' || e.key === 'Escape') {
        dropdownList.classList.remove('visible');
        dropdownButton.classList.remove('active');
        dropdownBtn.classList.remove('active');
      }
    });
  });
