const tabButtons = document.querySelectorAll('.tabs-button');
const tabContents = document.querySelectorAll('.tab-content');

// Проверяем, что элементы есть на странице
if (tabButtons.length > 0 && tabContents.length > 0) {
  // Передаем в функцию activeTabButton первую кнопку
  activeTabButton(tabButtons[0])

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Делаем все кнопки неактивными
      tabButtons.forEach(button => button.classList.remove('active'))

      // Делаем активной только ту кнопку, на которую нажали
      button.classList.add('active')

      // Скрываем все табы
      tabContents.forEach(tab => tab.classList.remove('active'))

      // Находим соответствующий таб и показываем его
      const tabIndex = button.dataset.tab
      const tabToShow = document.querySelector('.tab-content[data-tab="' + tabIndex + '"]')

      tabToShow.classList.add('active')

      // Передаем в функцию activeTabButton текущую активную кнопку
      activeTabButton(button)
    })
  })

  // Функция для перемещения активной кнопки на первое место
  function activeTabButton(tabButton) {
    tabButton.parentNode.prepend(tabButton)
  }
}
