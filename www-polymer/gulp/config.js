'use strict';

const dist = './dist';

module.exports = {

  app: {
    src: ['./app/**/*.js', '!./app/elements/**/*.js', '!./app/vendor/**/*.js'],
    entry: './app/index.js',
    name: 'app.js',
    standalone: 'app',
    dist: dist + '/js/'
  },

  clean: {
    src: [dist]
  },

  elements: {
    src: './app/elements/**/*.html',
    entry: './app/elements/elements.html',
    dist: dist + '/elements/'
  },

  flags: {
    minify: false,
    sourcemap: true
  },

  images: {
    src: ['./static/images/**/*.{gif,jpg,png,svg}'],
    dist: dist + '/images/'
  },

  lint: {
    src: ['./app/**/*.js', '!./app/vendor/**/*.js']
  },

  server: {
    root: dist,
    port: 8080
  },

  static: {
    src: ['./static/**/*.*', '!./static/images/**/*.{gif,jpg,png,svg}'],
    dist: dist
  },

  styles: {
    src: './styles/**/*',
    entry: './styles/index.styl',
    dist: dist + '/css/'
  },

  vendor: {
    src: './app/vendor/**/*.js',
    name: 'vendor.js',
    dist: dist + '/js/'
  }

};
