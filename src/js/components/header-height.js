const header = document.querySelector(".header-wrapper");

if (header && header.offsetHeight) {
  let descriptionCard = document.querySelector(".description-card");

  if (descriptionCard) {
    window.addEventListener("scroll", function () {
      // Задержка расчета высоты шапки на 1 секунду
      setTimeout(() => {
        const headerHeight = header.offsetHeight;

        if (window.pageYOffset > 0) {
          descriptionCard.style.top = `${headerHeight + 20}px`;
          header.classList.add('active');
        } else {
          descriptionCard.style.top = 0;
          header.classList.remove('active');
        }
      }, 1);
    });
  }

  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 0) {
      header.classList.add('active');
    } else {
      header.classList.remove('active');
    }
  });
}
