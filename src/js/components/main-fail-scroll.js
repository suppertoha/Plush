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
  const element = document.querySelector(".js-scroll");
  const wrapper = element.parentElement;
  const startOffset = wrapper.getBoundingClientRect().top + scrollY;
  const sidebarHeight = document.querySelector(
    ".main-layout__sidebar"
  ).offsetHeight;
  const layoutHeight = document.querySelector(".js-scroll").offsetHeight;
  const endOffset = Math.floor(
    startOffset + wrapper.clientHeight - headerHeight
  );

  console.log(sidebarHeight);
  if (sidebarHeight >= layoutHeight) {
    console.log('больше')
    element.classList.add('q')
  } else {
    element.classList.remove(".js-scroll")
  }

  if (scrollY + headerHeight > startOffset) {
    element.classList.add("fixed");
    element.style.width = wrapper.clientWidth + "px";
    element.style.top = headerHeight + 4 + "px";
  } else {
    element.classList.remove("fixed");
    element.style.top = 0;
    element.style.width = "auto";
  }

  if (scrollY + element.clientHeight >= endOffset) {
    element.classList.add("stopped");
    element.style.top =
      wrapper.clientHeight + startOffset - element.clientHeight + "px";
  } else {
    element.classList.remove("stopped");
  }
});
