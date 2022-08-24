import gulp from 'gulp';

import config from './gulp/config/config.js';
import plugins from './gulp/config/plugins.js';
import { isDev, isProd } from './gulp/utils/environment.js';

import { build } from './gulp/tasks/modes/build.js';
import { development } from './gulp/tasks/modes/development.js';
import { buildZip } from './gulp/tasks/modes/zip.js';

global.$ = {
  isDev,
  isProd,
  gulp,
  config,
  plugins,
};

import { pug } from './gulp/tasks/pug.js';
import { styles } from './gulp/tasks/styles.js';
import { scripts } from './gulp/tasks/scripts.js';
import { images } from './gulp/tasks/images.js';
import { makeMonoSprite, makeMultiSprite } from './gulp/tasks/sprite.js';
import { convertFonts, fonts } from './gulp/tasks/fonts.js';

// Main tasks
gulp.task('development', development);
gulp.task('build', build);
gulp.task('zip', gulp.series(build, buildZip));

// Build separate types of files
gulp.task('pug', pug);
gulp.task('styles', styles);
gulp.task('scripts', scripts);
gulp.task('images', images);
gulp.task('sprites', gulp.parallel(makeMonoSprite, makeMultiSprite));
gulp.task('fonts', gulp.series(convertFonts, fonts));

// Default task
gulp.task('default', gulp.series('development'));
