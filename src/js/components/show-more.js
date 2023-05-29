const showMore = document.querySelector(".show-more");
const productsLength = document.querySelectorAll(".cards-main__item").length;
let items = 6;

if (productsLength) {
  showMore.addEventListener("click", () => {
    items += 6;
    const array = Array.from(
      document.querySelector(".cards-main__items").children
    );
    const visItems = array.slice(0, items);

    visItems.forEach((el) => el.classList.add("is-visible"));

    if (visItems.length === productsLength) {
      showMore.style.display = "none";
    }
  });
}

