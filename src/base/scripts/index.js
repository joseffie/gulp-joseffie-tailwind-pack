import { isWebp } from './helpers/is.js';
import setPaddingFromHeader from './helpers/setPaddingFromHeader.js';

isWebp((support) => {
  if (support === true) {
    document.body.classList.add('webp');
  } else {
    document.body.classList.add('no-webp');
  }
});

setPaddingFromHeader();

import '../../components/components.js';
