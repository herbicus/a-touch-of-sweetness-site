/* eslint-env node */

'use strict';

const fs = require('fs');
const _ = require('lodash');
const gulp = require('gulp-help')(require('gulp'));
const $ = require('gulp-load-plugins')();
const runSequence = require('run-sequence');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const browserSyncOptions = require('./bs-config.js');
const del = require('del');
const argv = require('yargs').argv;
const config = require('./package.json').config;
const imageSize = require('image-size');
const numeral = require('numeral');
const shuffle = require('lodash.shuffle');
const gifsicle = require('imagemin-gifsicle');
const jpegtran = require('imagemin-jpegtran');
const pngquant = require('imagemin-pngquant');
const cssslam = require('css-slam');

function minifyHtml() {
  return $.minifyHtml({
    quotes: true,
    empty: true,
    spare: true
  }).on('error', console.log.bind(console));
}

// Default task that builds everything.-----------------------------------------

gulp.task('default', ['build']);

// Setup tasks------------------------------------------------------------------

gulp.task('clean', function() {
  return del([config.dist, '.tmp']);
});

gulp.task('build', ['clean'], function(done) {
  runSequence(
    'data',
    'images',
    'polymer-build',
    'copy',
    'crisper',
    'html',
    'empty-sw',
    done);
});

// Frontend prod build tasks----------------------------------------------------

gulp.task('polymer-build', $.shell.task('polymer build'));

gulp.task('copy-build', function() {
  return gulp.src(['build/bundled/**/*'])
    .pipe(gulp.dest('out/static/'));
});

gulp.task('copy-config', function() {
  return gulp.src(['app.yaml'])
    .pipe(gulp.dest('out/'));
});

gulp.task('copy-widget', function() {
  return gulp.src(['lib/trends-widget/**/*'])
    .pipe(gulp.dest('out/trends-widget/'));
});

gulp.task('copy', ['copy-build', 'copy-config', 'copy-widget']);

gulp.task('crisper', function() {
  return gulp.src(['out/static/src/site-application.html'])
    .pipe($.crisper({
      jsFileName: 'main.js'
    }))
    .pipe($.if('*.html', minifyHtml()))
    // .pipe($.if('*.html', cssslam.gulp()))
    .pipe(gulp.dest('out/static/src'));
});

gulp.task('html-index', function() {
  return gulp.src(['out/static/index.html'])
    .pipe(minifyHtml())
    // .pipe(cssslam.gulp())
    .pipe(gulp.dest('out/static'));
});

gulp.task('html', ['html-index']);

gulp.task('empty-sw', function() {
  return gulp.src(['out/static/service-worker.js'])
    .pipe($.replace(/.+/gm, ''))
    .pipe(gulp.dest('out/static'));
});

// Local server-----------------------------------------------------------------

gulp.task('browser-sync', function(done) {
  browserSync.init(browserSyncOptions, done);
});

gulp.task('serve', ['browser-sync'], $.shell.task('polymer serve'));

// Optimize images.-------------------------------------------------------------

gulp.task('images', function() {

  return gulp.src(['./images/**/*.*'])
    .pipe($.imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [
        gifsicle({interlaced: true}),
        jpegtran({progressive: true}),
        pngquant()
      ]
    }))
    .pipe(gulp.dest('./images/'))

});

