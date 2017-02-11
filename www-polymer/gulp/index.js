'use strict';

const browser = require('browser-sync').create();
const config = require('./config');
const fs = require('fs');
const gulp = require('gulp');
const path = require('path');
const url = require('url');

// two more states to minify code and create sourcemaps.
// The default is for local development.

gulp.task('dev', (done) => {

  Object.assign(config.flags, {
    minify: false,
    sourcemap: true
  });
  done();

});

gulp.task('prod', (done) => {

  Object.assign(config.flags, {
    minify: true,
    sourcemap: false
  });
  done();

});

// define stackable tasks

gulp.task('app', require('./tasks/app')(gulp, browser, config.app, config.flags));
gulp.task('clean', require('./tasks/clean')(gulp, config.clean));
gulp.task('elements', require('./tasks/elements')(gulp, browser, config.elements, config.flags));
gulp.task('eslint', require('./tasks/eslint')(gulp, config.lint));
gulp.task('images', require('./tasks/images')(gulp, browser, config.images, config.flags));
gulp.task('static', require('./tasks/static')(gulp, browser, config.static));
gulp.task('styles', require('./tasks/styles')(gulp, browser, config.styles, config.flags));
gulp.task('vendor', require('./tasks/vendor')(gulp, browser, config.vendor, config.flags));

// start the browser sync local server

gulp.task('server', (done) => {

  browser.init({
    server: {
      baseDir: config.server.root,
      routes: {
        '/bower_components': 'app/bower_components',
        '/node_modules': 'node_modules'
      }
    },
    port: config.server.port,
    ghostMode: {
      clicks: false,
      forms: false,
      scroll: false
    }
  });

  done();

});

// define watch actions

gulp.task('watch', (done) => {

  gulp.watch(config.app.src, gulp.series('app'));
  gulp.watch(config.elements.src, gulp.series('elements'));
  gulp.watch(config.static.src, gulp.series('static'));
  gulp.watch(config.styles.src, gulp.series('styles'));
  gulp.watch(config.vendor.src, gulp.series('vendor'));

  done();

});

// define user commands

gulp.task('build', gulp.series('clean', gulp.parallel('app', 'elements', 'images', 'vendor', 'static', 'styles')));

gulp.task('build-dev', gulp.series('dev', 'build'));

gulp.task('build-prod', gulp.series('prod', 'build'));

gulp.task('watch-dev', gulp.series('build-dev', 'server', 'watch'));

gulp.task('watch-prod', gulp.series('build-prod', 'server', 'watch'));

gulp.task('default', gulp.series('watch-dev'));
