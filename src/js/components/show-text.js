function handleResize() {
  const textContainers = document.querySelectorAll('.text-container');
  const btns = document.querySelectorAll('.text-btn');
  const texts = document.querySelectorAll('.reviews-card__text');

  for (let i = 0; i < texts.length; i++) {
    const text = texts[i];
    const textContainer = textContainers[i];
    const btn = btns[i];

    if (text && textContainer && btn) {
      if (text.offsetHeight > 200) {
        textContainer.classList.add('active');
        if (textContainer.classList.contains('active')) {
          btn.style.display = 'block';
        }
      }

      btn.addEventListener('click', () => {
        textContainer.classList.toggle('active');
        btn.classList.toggle('active');
        if (!textContainer.classList.contains('active')) {
          btn.style.display = 'none';
        }
      });
    }
  }
}

// Вызываем функцию для первоначальной инициализации
handleResize();

// Добавляем обработчик события resize
window.addEventListener('resize', handleResize);




