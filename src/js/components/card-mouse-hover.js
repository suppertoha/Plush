const initCardMain = () => {
  const cards = document.querySelectorAll('.card-main__card');
  if (!cards.length) return;

  cards.forEach((card) => {
    const cardBottom = card.querySelector('.card-main__bottom');
    if (!cardBottom) return;

    const priceCard = cardBottom.querySelector('.price-card');
    const cardButton = cardBottom.querySelector('.card-main__button_card');
    const cardButtonHeight = cardButton ? cardButton.offsetHeight : 0;

    const cardHeight = priceCard ? priceCard.offsetHeight : cardButtonHeight;

    cardBottom.style.bottom = `-${cardButtonHeight}px`;

    let isHovered = false;

    card.addEventListener('mouseenter', () => {
      if (!priceCard) return;

      cardBottom.style.position = 'absolute';
      cardBottom.style.bottom = `-${cardHeight + cardButtonHeight}px`;
      isHovered = true;
    });

    card.addEventListener('mouseleave', () => {
      if (!priceCard) {
        cardBottom.style.bottom = `-${cardButtonHeight}px`;
      } else if (isHovered) {
        cardBottom.style.bottom = `-${cardButtonHeight}px`;
        isHovered = false;
      }
    });
  });
};

// Вызов функции initCard() для первоначальной инициализации
initCardMain();

// Обработчик события resize для обновления кода при изменении размера окна
window.addEventListener('resize', initCardMain);
