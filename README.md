# React, Redux, i18n, Webpack-hot-loaded, modular css boilerplate with a11y warnings

A jumping off point for developing Redux React applications with Webpack, and using hot module loading and Redux dev tools for development. Also includes CSS modules, a split point for polyfill-ing `Intl` in Safari, and `react-a11y` to point out accessibility shortcomings.

Borrows from a lot of other boilerplate repositories, but combined in a way that I'd like to explore developing.

## Getting started

```sh
# Get the code
git clone git@github.com:EvanSimpson/hot-boilerplate.git
cd hot-boilerplate
# Install dependencies
npm install
# Compile with Webpack and serve over webpack-dev-server
npm start
```

Then go to [http://localhost:3000/webpack-dev-server/dist/index.html](http://localhost:3000/webpack-dev-server/dist/index.html) to see it live.

Any changes you make to your components or css should automagically be loaded into the browser without refresh.

### TODO
Things I'm most likely to do next, in no order:

1. Add `react-router`.
2. Add animations / `CSSTransitionGroup` example
3. Test the production build path and make sure it does anything
4. Deal with awkward CSS modules placement (where the hell are css files supposed to go now?)
5. Pull strings into locale file(s)

#### Note:
I have no intention of keeping this repository up to date.
