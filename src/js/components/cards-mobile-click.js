// Получаем все элементы с классом "card-main"
const cards = document.querySelectorAll('.card-main__card');

// Перебираем все найденные элементы
cards.forEach(card => {
  // Добавляем обработчик клика
  card.addEventListener('click', function(event) {
    // Проверяем условие ширины экрана
    if (window.innerWidth < 1024) {
      // Проверяем, есть ли у элемента класс "active"
      if (!this.classList.contains('active')) {
        // Добавляем класс "active"
        this.classList.add('active');
      }
    }
  });
});
