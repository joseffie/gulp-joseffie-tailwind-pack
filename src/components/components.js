import { initBurgerMenu } from './burger/burger.js';
import { getHeaderHeight, setHeaderHeight } from './header/header.js';

const components = {
  burger: {
    initBurgerMenu,
  },
  header: {
    getHeaderHeight,
    setHeaderHeight,
  },
};

export default components;
