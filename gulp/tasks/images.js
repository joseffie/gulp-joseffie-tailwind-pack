import imagemin from 'gulp-imagemin';
import gulpWebp from 'gulp-webp';

import { imageminConfig } from '../config/options.js';

export const images = async () =>
  $.gulp
    .src($.config.path.src.images)
    .pipe(
      $.plugins.plumber(
        $.plugins.notify.onError({
          title: 'IMAGES',
          message: 'You got an error: <%= error.message %>',
        }),
      ),
    )
    .pipe($.plugins.newer($.config.path.build.images))
    .pipe($.plugins.if($.isProd, gulpWebp()))
    .pipe($.plugins.if($.isProd, $.gulp.dest($.config.path.build.images)))
    .pipe($.plugins.if($.isProd, $.gulp.src($.config.path.src.images)))
    .pipe($.plugins.if($.isProd, $.plugins.newer($.config.path.build.images)))
    .pipe($.plugins.if($.isProd, imagemin(imageminConfig)))
    .pipe($.gulp.dest($.config.path.build.images))
    .pipe($.gulp.src($.config.path.src.svg))
    .pipe($.gulp.dest($.config.path.build.images))
    .pipe($.plugins.browsersync.stream());
