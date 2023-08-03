//class Rating {
//  constructor(dom) {
//    dom.innerHTML = '<svg width="110" height="20"></svg>';
//    this.svg = dom.querySelector("svg");
//    for (var i = 0; i < 5; i++)
//      this.svg.innerHTML += `<polygon data-value="${i + 1}"
//            transform="translate(${i * 22},0)"
//            points="10,1 4,19.8 19,7.8 1,7.8 16,19.8">`;
//    this.svg.onclick = (e) => this.change(e);
//    this.render();
//  }

//  change(e) {
//    let value = e.target.dataset.value;
//    value && (this.svg.parentNode.dataset.value = value);
//    this.render();
//  }

//  render() {
//    this.svg.querySelectorAll("polygon").forEach((star) => {
//      let on = +this.svg.parentNode.dataset.value >= +star.dataset.value;
//      star.classList.toggle("active", on);
//    });
//  }
//}

//document.querySelectorAll(".rating").forEach((dom) => new Rating(dom));

const stars = document.querySelectorAll('.star');
  const ratingInput = document.getElementById('rating-value');

  // Добавляем обработчики событий для звезд
  stars.forEach(star => {
    star.addEventListener('click', () => {
      const ratingValue = parseInt(star.dataset.value);
      ratingInput.value = ratingValue;
      updateStars(ratingValue);
    });

    star.addEventListener('mouseover', () => {
      const ratingValue = parseInt(star.dataset.value);
      updateStars(ratingValue);
    });

    star.addEventListener('mouseout', () => {
      const currentRating = parseInt(ratingInput.value);
      updateStars(currentRating);
    });
  });

  // Функция для обновления стилей звезд
  function updateStars(rating) {
    if (ratingInput && !isNaN(rating)) {
      stars.forEach((star, index) => {
        if (index < rating) {
          star.classList.add('active');
        } else {
          star.classList.remove('active');
        }
      });
    }
  }
