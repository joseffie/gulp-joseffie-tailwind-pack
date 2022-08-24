import * as nodePath from 'path';

const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = './dist';
const srcFolder = './src';
const archiveFolder = './zip';

const config = {
  port: 9050,
  path: {
    build: {
      html: buildFolder,
      styles: `${buildFolder}/styles`,
      scripts: `${buildFolder}/scripts`,
      images: `${buildFolder}/assets/images`,
      fonts: `${buildFolder}/assets/fonts`,
    },
    src: {
      pug: `${srcFolder}/views/*.pug`,
      styles: [
        `${srcFolder}/base/styles/*.{sass,scss}`,
        `!${srcFolder}/base/styles/_*.{sass,scss}`,
      ],
      images: `${srcFolder}/assets/images/**/*.{jpg,jpeg,png,gif,ico,webp}`,
      svg: `${srcFolder}/assets/images/**/*.svg`,
      fonts: `${srcFolder}/assets/fonts/**/*.{otf,ttf,woff,woff2}`,
      iconsmono: `${srcFolder}/assets/icons/mono/*.svg`,
      iconsmulti: `${srcFolder}/assets/icons/multi/*.svg`,
    },
    watch: {
      pug: `${srcFolder}/**/*.pug`,
      styles: `${srcFolder}/**/*.{sass,scss}`,
      scripts: `${srcFolder}/**/*.js`,
      images: `${srcFolder}/assets/images/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`,
      fonts: `${srcFolder}/assets/fonts/**/*.{otf,ttf,woff,woff2}`,
      iconsmono: `${srcFolder}/assets/icons/mono/*.svg`,
      iconsmulti: `${srcFolder}/assets/icons/multi/*.svg`,
      data: `${srcFolder}/base/data/*.json`,
    },
    buildFolder,
    srcFolder,
    archiveFolder,
    rootFolder,
  },
};

export default config;
