import svgSprite from 'gulp-svg-sprite';
import { monoColorSpriteConfig, multiColorSpriteConfig } from '../config/options.js';

export const makeMonoSprite = async () =>
  $.gulp
    .src($.config.path.src.iconsmono)
    .pipe(
      $.plugins.plumber(
        $.plugins.notify.onError({
          title: 'Mono-color SVG',
          message: 'You got an error: <%= error.message %>',
        }),
      ),
    )
    .pipe(svgSprite(monoColorSpriteConfig))
    .pipe($.gulp.dest(`${$.config.path.srcFolder}/assets/images/sprites`));

export const makeMultiSprite = async () =>
  $.gulp
    .src($.config.path.src.iconsmulti)
    .pipe(
      $.plugins.plumber(
        $.plugins.notify.onError({
          title: 'Multi-color SVG',
          message: 'You got an error: <%= error.message %>',
        }),
      ),
    )
    .pipe(svgSprite(multiColorSpriteConfig))
    .pipe($.gulp.dest(`${$.config.path.srcFolder}/assets/images/sprites`));
