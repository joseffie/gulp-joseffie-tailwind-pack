const setPaddingFromHeader = () => {
  const headerHeight = document.querySelector('.page__header').offsetHeight;
  document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);
};

export default setPaddingFromHeader;
