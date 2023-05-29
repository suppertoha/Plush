function preventScroll() {
  // Получаем текущую позицию прокрутки страницы
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Устанавливаем body в position: fixed и top в отрицательное значение текущей позиции прокрутки
  document.body.style.position = 'fixed';
  document.body.style.top = -scrollTop + 'px';
}

(function () {
  const burger = document.querySelector("[data-burger]");
  const menu = document.querySelector("[data-menu]");
  const menuItems = document.querySelectorAll("[data-menu-item]");
  const overlay = document.querySelector("[data-menu-overlay]");

  if (burger) {
    burger.addEventListener("click", (e) => {
      burger.classList.toggle("burger--active");
      menu.classList.toggle("menu--active");
      if (menu.classList.contains("menu--active")) {
        burger.setAttribute("aria-expanded", "true");
        burger.setAttribute("aria-label", "Закрыть меню");

        preventScroll();
      } else {
        burger.setAttribute("aria-expanded", "false");
        burger.setAttribute("aria-label", "Открыть меню");

        // Восстанавливаем позицию прокрутки
        const scrollTop = parseInt(document.body.style.top, 10) * -1;
        document.body.style.position = '';
        document.body.style.top = '';
        window.scrollTo(0, scrollTop);
      }
    });
  }

  if (overlay) {
    overlay.addEventListener("click", () => {
      closeMenu();
    });
  }

  if (menuItems.length > 0) {
    menuItems.forEach((el) => {
      el.addEventListener("click", () => {
        closeMenu();
      });
    });
  }

  document.addEventListener("click", (e) => {
    if (
      menu &&
      !menu.contains(e.target) &&
      burger &&
      !burger.contains(e.target) &&
      menu.classList.contains("menu--active")
    ) {
      closeMenu();
    }
  });

  function closeMenu() {
    burger.setAttribute("aria-expanded", "false");
    burger.setAttribute("aria-label", "Открыть меню");
    burger.classList.remove("burger--active");
    menu.classList.remove("menu--active");

    // Восстанавливаем позицию прокрутки
    const scrollTop = parseInt(document.body.style.top, 10) * -1;
    document.body.style.position = '';
    document.body.style.top = '';
    window.scrollTo(0, scrollTop);
  }
})();
