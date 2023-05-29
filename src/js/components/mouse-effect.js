const followCursor = () => {
  // объявляем функцию followCursor
  const el = document.querySelector(".follow-cursor"); // ищем элемент, который будет следовать за курсором


  window.addEventListener("mousemove", (e) => {
    // при движении курсора
    const target = e.target; // определяем, где находится курсор
    if (!target) return;

    if (
      target.closest(
        ".content-text__inner, .sidebar-cart__items,.cards-main__item, .cards-main__show-more, .main__slider_inside, .main-menu__inner,.commission__inner,.payment__inner, .main__slider,.about,.cart-about__item, h1,.payment__consultation, .important__header, button,.list__item, .header-politics, a, button, picture, h1, h2, h3, p, ul, li, input,.btn-up,tr,th, span,.testing__inner,.apply-testing__inner,.skate-insurance__inner,.calendar__show,.calendar__body,.testing__inner,.contact__map,.contact__item,.contact__description,.searching-results__content,.description-search,.magazine__block,.magazine__content-text,.school-search__map,.school-search__container,.main-error__text "
      )
    ) {
      // если курсор наведён на ссылку
      el.classList.remove("follow-cursor"); // элементу добавляем активный класс
      el.classList.add("hidden-mouse"); // удаляем активный класс

    } else {
      // иначе
      el.classList.add("follow-cursor");
      el.classList.remove("hidden-mouse");
    }

    el.style.left = e.clientX + 20 +  "px" ; // задаём элементу позиционирование слева
    el.style.top = e.clientY + 20 + "px"; // задаём элементу позиционирование сверху
  });
};

followCursor(); // вызываем функцию followCursor


