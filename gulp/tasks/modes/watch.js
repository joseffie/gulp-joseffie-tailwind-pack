import { pug } from '../pug.js';
import { styles } from '../styles.js';
import { scripts } from '../scripts.js';
import { images } from '../images.js';
import { makeMonoSprite, makeMultiSprite } from '../sprite.js';
import { convertFonts, fonts } from '../fonts.js';

export const watch = async () => {
  global.watch = true;

  // Modules, pages
  $.gulp.watch($.config.path.watch.pug, pug).on('all', (event, filepath) => {
    global.forceRebuild = false;
    global.emittyPugChangedFile = event === 'unlink' ? undefined : filepath;
  });

  // Data
  $.gulp.watch($.config.path.watch.data, pug).on('all', () => {
    global.forceRebuild = true;
  });

  // Tailwind & Styles
  $.gulp.watch(
    [$.config.path.watch.pug, $.config.path.watch.styles, 'tailwind.config.cjs'],
    styles,
  );

  // Scripts
  $.gulp.watch($.config.path.watch.scripts, scripts);

  // Images
  $.gulp.watch($.config.path.watch.images, images);

  // Single-color SVG icons
  $.gulp.watch($.config.path.watch.iconsmono, makeMonoSprite);

  // Multi-color SVG icons
  $.gulp.watch($.config.path.watch.iconsmono, makeMultiSprite);

  // Fonts
  $.gulp.watch($.config.path.watch.fonts, $.gulp.series(convertFonts, fonts));
};
