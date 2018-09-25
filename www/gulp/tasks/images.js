'use strict';

var config = require('../config.js');

var args = require('yargs').argv;
var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var changed = require('gulp-changed');
var recursive = require('recursive-readdir');

var fs = require('fs');
var images = [];

function buildImagemin () {



}

gulp.task('imagemin', ['static'], function () {

	return gulp.src(config.images.src)
		.pipe(changed(config.images.dist))
		.pipe(imagemin())
		.pipe(gulp.dest(config.images.dist));

});

// gulp.task('manifest', function(done) {

// 	recursive('./static/images', function (err, files) {
// 	  if (err) throw err;

// 	  files.forEach( function(file) {
// 	  	var object = {src: file.replace(/^static/g, '..').replace(/\\/g, '/') };
// 	  	images.push(object);
// 	  });

// 	  var jsonObject = JSON.stringify(images);

// 	  fs.writeFile('./static/manifest.json', jsonObject, function(err) {
// 	  	if (err) throw err;
// 	  	done();
// 	  });

// 	});

// });

// gulp.task('images', ['imagemin', 'manifest'], function() {
gulp.task('images', ['imagemin'], function() {

});
