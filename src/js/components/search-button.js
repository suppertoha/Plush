const navItemMobi = document.querySelector('.nav__item_mobi');
const searchField = document.querySelector('.search__field');

// Проверяем наличие блока search__field на странице
if (searchField !== null) {
  // Делегируем события клика на весь документ
  document.addEventListener('click', (e) => {
    // Если клик произошел не на navItemMobi и не на searchField, удаляем у searchField класс active
    if (!e.target.closest('.nav__item_mobi') && !e.target.closest('.search__field')) {
      searchField.classList.remove('active');
    }
  });

  // Назначаем обработчик события клика на navItemMobi
  navItemMobi.addEventListener('click', (e) => {
    e.preventDefault();
    // Добавляем или удаляем у searchField класс active в зависимости от его наличия
    searchField.classList.toggle('active');
  });

  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 0) {
      searchField.classList.add('height');
    } else {
      searchField.classList.remove('height');
    }
  });
}
