window.addEventListener("scroll", moveItemOnScroll);

function moveItemOnScroll() {
  const headerBlock = document.querySelector(".header-block");
  const scrollTop = window.scrollY;
  if (scrollTop > 0) {
    headerBlock.classList.add("active-scroll");
  } else {
    headerBlock.classList.remove("active-scroll");
  }
}

function throttle(func, ms) {
  let isThrottled = false;
  let savedArgs = null;
  let savedThis = null;

  return function wrapper() {
    if (isThrottled) {
      savedArgs = arguments;
      savedThis = this;
      return;
    }

    func.apply(this, arguments);
    isThrottled = true;

    setTimeout(function () {
      isThrottled = false;

      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, ms);
  };
}

window.addEventListener("scroll", function () {
  const { scrollY } = window;
  const headerHeight = document.querySelector(".header-block").offsetHeight;
  const element = document.querySelector(".main-layout__inner");
  const wrapper = element.parentElement;
  const startOffset = wrapper.getBoundingClientRect().top + scrollY;
  const elementSidebar = document.querySelector(".main-layout__sidebar");

  const endOffset = Math.floor(
    startOffset + wrapper.clientHeight - headerHeight
  );


  if (scrollY + headerHeight > startOffset) {

    element.style.top = headerHeight + 4 + "px";
  } else {
    element.style.top = 0;
  }


  if (scrollY + headerHeight > startOffset) {

    elementSidebar.style.top = headerHeight + 4 + "px";
  } else {
    elementSidebar.style.top = 0;
  }

});
