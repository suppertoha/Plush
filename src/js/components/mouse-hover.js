const hoverElement = document.querySelector('.mouse-hover');
const body = document.body;

if (hoverElement) {
  hoverElement.addEventListener('mouseover', () => {
    body.classList.add('scroll-hidden');
  });

  hoverElement.addEventListener('mouseout', () => {
    body.classList.remove('scroll-hidden');
  });
}

