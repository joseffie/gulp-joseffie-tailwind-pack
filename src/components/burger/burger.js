export const initBurgerMenu = () => {
  const burgerMenu = document?.querySelector('.burger');
  const mainNavMenu = document?.querySelector('.main-nav');

  if (burgerMenu && mainNavMenu) {
    burgerMenu.addEventListener('click', () => {
      document.body.classList.toggle('_no-scroll');
      burgerMenu.classList.toggle('_active');
      mainNavMenu.classList.toggle('_active');
    });
  }
};
