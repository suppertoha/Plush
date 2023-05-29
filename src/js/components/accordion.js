document.querySelectorAll(".accordion-start-js").forEach((el) => {
  el.addEventListener("click", () => {
    const elems = document.querySelectorAll(".accordion-start-js");
    elems.forEach((elem) => {
      if (elem !== el) {
        elem.classList.remove("open");
        elem.nextElementSibling.classList.remove("open");
      }
    });
    el.classList.toggle("open");
    let content = el.nextElementSibling;
    if (content.classList.contains("open")) {
      document.querySelectorAll(".accordion-content-js").forEach((el) => {
        if (content && content.classList.contains("open")) {
          content.classList.remove("open");
        }
      });
    } else {
      document.querySelectorAll(".accordion-content-js").forEach((el) => {
        if (content && !content.classList.contains("open")) {
          content.classList.add("open");
        }
      });
    }
  });
});

document.querySelectorAll(".accordion-start-js--next").forEach((el) => {
  el.addEventListener("click", () => {
    const elems = document.querySelectorAll(".accordion-start-js--next");
    elems.forEach((elem) => {
      if (elem !== el) {
        elem.classList.remove("open");
        elem.nextElementSibling.classList.remove("open");
        elem.nextElementSibling.style.maxHeight = null;
      }
    });
    el.classList.toggle("open");
    let content = el.nextElementSibling;
    if (content.classList.contains("open")) {
      document.querySelectorAll(".body-catalog__body").forEach((el) => {
        if (el) el.style.maxHeight = null;
        if (content && content.classList.contains("open")) {
          content.classList.remove("open");
        }
      });
    } else {
      document.querySelectorAll(".body-catalog__body").forEach((el) => {
        if (el) el.style.maxHeight = null;
        if (content && !content.classList.contains("open")) {
          content.classList.add("open");
        }
      });
    }
  });
});

const catalogSearchButton = document.querySelector(".catalog-search__button");
const body = document.querySelector("body");
const catalogSearchBody = document.querySelector(".catalog-search__body");

if (catalogSearchButton && catalogSearchBody) {
  catalogSearchButton.addEventListener("click", () => {
    body.classList.add("scroll-hidden");
  });

  document.addEventListener("click", (event) => {
    if (!catalogSearchButton.contains(event.target) && !catalogSearchBody.contains(event.target)) {
      body.classList.remove("scroll-hidden");
      document.querySelectorAll(".catalog-search__body.open").forEach((el) => {
        el.classList.remove("open");
      });
    }
  });
} else {
  console.error("Ошибка: Не удалось найти один или несколько элементов.");
}


