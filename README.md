# gulp-joseffie-tailwind-pack

> Gulp based starter template for better front-end coding with TailwindCSS and Pug & SCSS preprocessors

## Table of contents

- [gulp-joseffie-tailwind-pack](#gulp-joseffie-tailwind-pack)
  - [Table of contents](#table-of-contents)
  - [Features](#features)
  - [Quickstart](#quickstart)
  - [Main tasks](#main-tasks)
  - [Troubles using Pug with Tailwind](#troubles-using-pug-with-tailwind)
  - [Component generator](#component-generator)
  - [Copyright](#copyright)

## Features

- Component approach with [BEM](https://en.bem.info/) based.
- Automatic creation of component directories with files using the [bem-tools-create](https://github.com/bem-tools/bem-tools-create) tool.
- Automatic transform of fonts to woff/woff2 and file creation with `@font-face` declarations.
- Optimization and conversion of images to webp format.
- Automatic icon system based on SVG sprites.
- Checking for and fixing errors on commit.
- Using a hard code guide.

## Quickstart

Make sure you have [NodeJS](https://nodejs.org/en/) and [Yarn](https://yarnpkg.com/) installed

1. Install the [Gulp](https://gulpjs.com/) and [bem-tools-core](https://github.com/bem-tools/bem-tools-create) globally:

```
$ yarn add --globall gulp bem-tools-core bem-tools-create
```

2. Clone the project using:

```
$ git clone https://github.com/joseffie/gulp-joseffie-tailwind-pack.git my-project
```

3. Go to the project and run:

```
$ yarn
```

4. After installing the dependencies, start the dev server:

```
$ yarn run dev
```

## Main tasks

- `yarn run dev` - launches watcher and server.
- `yarn run build` - compiles and optimises project.
- `yarn run zip` - build and archives project.
- `yarn run deploy` - builds project and pushes to GitHub repo in `gh-pages` branch.
- `yarn run build:fonts` - compiles an local fonts located in `src/assets/fonts`.
- `yarn run build:sprites` - compiles an SVG icons located in `src/assets/icons` into SVG sprites.

## Troubles using Pug with Tailwind

Some characters used in Tailwind classes are not supported by Pug when writing classes with a dot `.`:

- The colon character `:` used for [utilities to style elements](https://tailwindcss.com/docs/hover-focus-and-other-states). This problem was fixed by changing the separator in `tailwind.config.cjs` from colon `:` to underscore `_`.

```pug
//- not supported, the code will return an error
element.font-gray-900.hover:font-blue-500

//- write
element.font-gray-900.hover_font-blue-500
```

- The `[` and `]` characters used to write [arbitrary values](https://tailwindcss.com/docs/adding-custom-styles#using-arbitrary-values). You will have to write classes for arbitrary values in the `class` attribute.

```pug
//- not supported, the code will return an error
element.max-w-lg.mx-auto.px-[25px]

//- write
element.max-w-lg.mx-auto(class='px-[25px]')
```

- Likewise with the `/` character, which is used in fractional values, and with `!` character which is used for important defining.

```pug
//- not supported, the code will return an error
element.w-1/2
element.!text-blue-100

//- write
element(class='w-1/2')
element(class='!text-blue-100')
```

## Component Generator

Create empty component by name in `src/components` folder.

By default generates only `*.pug`, `*.scss` and `*.js` files.

```
$ bem create component-name
```

If you need to create only one file type, use the `-T` flag:

```
$ bem create component-name -T pug
```

If you need to remove one or more default file types, use the `-n` flag:

```
$ bem create component-name -n js
```

If you need to add another file type to your component folder, use the `-t` flag:

```
$ bem create component-name -t md
```

You can also combine flags:

```
$ bem create component-name -n js -t yml
```

## Copyright

_Ivan Gavrilich (joseffie) © 2022 - today [The MIT License](./LICENSE)_
