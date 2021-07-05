function initAnimaScroll() {
  const products = document.querySelectorAll('.products__item');

  function animaScroll() {
    products.forEach((product) => {
      const position = product.getBoundingClientRect();
      if (position.top >= 0 && position.bottom <= window.innerHeight) {
        product.classList.add('active', product.dataset.anime);
      }
    })
  }

  animaScroll();
  window.addEventListener('scroll', animaScroll)
}
initAnimaScroll();