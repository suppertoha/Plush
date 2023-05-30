import Swiper, { Navigation, Pagination, Scrollbar, Autoplay } from "swiper";
Swiper.use([Navigation, Pagination, Scrollbar, Autoplay]);

const mainSlider = document.querySelector(".main-slider");

if (mainSlider) {
  const swiperAnime = new Swiper(mainSlider, {
    loop: true,
    grabCursor: true,
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false, // отключает остановку автопрокрутки при взаимодействии пользователя
    },
    navigation: {
      nextEl: ".main-slider__next.swiper-button-next",
      prevEl: ".main-slider__prev.swiper-button-prev",
    },
    pagination: {
      el: ".main-slider__pagination.swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      600: {
        spaceBetween: 10,
        slidesPerView: "auto",
      },
    },
  });

  // добавляем обработчик события мыши, чтобы остановить автопрокрутку свайпера при наведении
  mainSlider.addEventListener("mouseenter", () => {
    swiperAnime.autoplay.stop();
  });

  // добавляем обработчик события мыши, чтобы возобновить автопрокрутку свайпера после того, как пользователь уберет курсор
  mainSlider.addEventListener("mouseleave", () => {
    swiperAnime.autoplay.start();
  });
}

const sliderHits = document.querySelector('.slider-hits')

if (sliderHits) {
  const swiperAnime = new Swiper(sliderHits, {
    loop: false,
    grabCursor: true,
    slidesPerView: 2,
    spaceBetween: 10,
    //centeredSlides: true,
    navigation: {
      nextEl: ".slider-hits__next.swiper-button-next",
      prevEl: ".slider-hits__prev.swiper-button-prev",
    },

    pagination: {
      el: '.slider-bg-pagination-fraction-hits',
      type: 'fraction',
      formatFractionCurrent: function (number) {
          return number < 10 ? '0' + number : number;
      },
      renderFraction: function (currentClass, totalClass) {
          return '<span class="' + currentClass + '"></span>' +
              '<span class="rzdClass"></span>' +
              '<span class="' + totalClass + '"></span>';
      }
  },

    breakpoints: {
      460: {
        slidesPerView: '2',
      },
      600: {
        slidesPerView: '3',
        spaceBetween: 15,
      },
      769: {
        slidesPerView: '4',

      },
      1024: {
        spaceBetween: 20,
        slidesPerView: '4',
      },

    },

  });
}

const sliderNovelties = document.querySelector('.slider-novelties')

if (sliderNovelties) {
  const swiperAnime = new Swiper(sliderNovelties, {
    loop: false,
    grabCursor: true,
    slidesPerView: 2,
    spaceBetween: 10,
    //centeredSlides: true,
    navigation: {
      nextEl: ".slider-novelties__next.swiper-button-next",
      prevEl: ".slider-novelties__prev.swiper-button-prev",
    },

    pagination: {
      el: '.slider-bg-pagination-fraction-novelties',
      type: 'fraction',
      formatFractionCurrent: function (number) {
          return number < 10 ? '0' + number : number;
      },
      renderFraction: function (currentClass, totalClass) {
          return '<span class="' + currentClass + '"></span>' +
              '<span class="rzdClass"></span>' +
              '<span class="' + totalClass + '"></span>';
      }
  },

  breakpoints: {
    460: {
      slidesPerView: '2',
    },
    600: {
      slidesPerView: '3',
      spaceBetween: 15,
    },
    769: {
      slidesPerView: '4',

    },
    1024: {
      spaceBetween: 20,
      slidesPerView: '4',
    },

  },

  });
}

const sliderRecommendations = document.querySelector('.slider-recommendations')

if (sliderRecommendations) {
  const swiperAnime = new Swiper(sliderRecommendations, {
    loop: false,
    grabCursor: true,
    slidesPerView: 2,
    spaceBetween: 10,
    //centeredSlides: true,
    navigation: {
      nextEl: ".slider-recommendations__next.swiper-button-next",
      prevEl: ".slider-recommendations__prev.swiper-button-prev",
    },

    pagination: {
      clickable: true,
      el: '.slider-bg-pagination-fraction-recommendations',
      type: 'fraction',
      formatFractionCurrent: function (number) {
          return number < 10 ? '0' + number : number;
      },
      renderFraction: function (currentClass, totalClass) {
          return '<span class="' + currentClass + '"></span>' +
              '<span class="rzdClass"></span>' +
              '<span class="' + totalClass + '"></span>';
      }
  },

  breakpoints: {
    460: {
      slidesPerView: '2',
    },
    600: {
      slidesPerView: '3',
      spaceBetween: 15,
    },
    769: {
      slidesPerView: '4',

    },
    1024: {
      spaceBetween: 20,
      slidesPerView: '4',
    },

  },

  });
}

const sliderReviews = document.querySelector('.slider-reviews')

if (sliderReviews) {
  const swiperAnime = new Swiper(sliderReviews, {
    loop: false,
    grabCursor: true,
    slidesPerView: 2,
    spaceBetween: 10,
    //centeredSlides: true,
    navigation: {
      nextEl: ".slider-reviews__next.swiper-button-next",
      prevEl: ".slider-reviews__prev.swiper-button-prev",
    },

    pagination: {
      clickable: true,
      el: '.slider-bg-pagination-fraction-reviews',
      type: 'fraction',
      formatFractionCurrent: function (number) {
          return number < 10 ? '0' + number : number;
      },
      renderFraction: function (currentClass, totalClass) {
          return '<span class="' + currentClass + '"></span>' +
              '<span class="rzdClass"></span>' +
              '<span class="' + totalClass + '"></span>';
      }
  },

  breakpoints: {

    768: {
      slidesPerView: '1.5',
      spaceBetween: 20,
    },

    900: {
      slidesPerView: '2',
      spaceBetween: 20,
    },

    1024: {
      slidesPerView: '2',
      spaceBetween: 30,
    },

  },

  });
}




