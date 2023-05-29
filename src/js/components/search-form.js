function searchFormHedaer() {
  const searchForm = document.querySelector('.search-form');

  if (!!searchForm) {
    searchForm.addEventListener('click', () => {
      searchForm.classList.add('search-form--active');
      searchForm.firstElementChild.focus();

      let searchBtn = document.querySelector('.search-form__btn');

      if (!!searchBtn) {
        let timerId = setTimeout(() => {
          searchBtn.setAttribute('type', 'submit');
        }, 500);
      }
    });

    document.addEventListener('click', (e) => {
      let target = e.target;
      let its_searchForm = target == searchForm || searchForm.contains(target);
      let searchForm_is_active = searchForm.classList.contains('search-form--active');

      if (!its_searchForm && searchForm_is_active) {
        searchForm.classList.remove('search-form--active');

        let searchBtn = document.querySelector('.search-form__btn');

        if (!!searchBtn) {
          searchBtn.setAttribute('type', 'button');
        }
      }
    });
  }
}

searchFormHedaer();
