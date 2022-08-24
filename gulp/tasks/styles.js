import webpCss from 'gulp-webpcss';
import gulpSass from 'gulp-sass';
import dartSass from 'sass';
import postcss from 'gulp-postcss';

const sass = gulpSass(dartSass);

export const styles = async () =>
  $.gulp
    .src($.config.path.src.styles, { sourcemaps: $.isDev })
    .pipe($.plugins.plumber())
    .pipe($.plugins.replace(/@img\//g, '../assets/images/'))
    .pipe(
      sass({
        outputStyle: 'expanded',
      }),
    )
    .pipe(
      $.plugins.if(
        $.isProd,
        webpCss({
          webpClass: '.webp',
          noWebpClass: '.no-webp',
        }),
      ),
    )
    .pipe(postcss())
    .pipe($.gulp.dest($.config.path.build.styles))
    .pipe($.plugins.browsersync.stream());
