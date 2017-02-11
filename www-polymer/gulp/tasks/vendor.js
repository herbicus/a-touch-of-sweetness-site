/**
 * Merges all (vendor) javascript files into one js file.
 * @tasks/scripts-vendor
 */

'use strict';

const concat = require('gulp-concat');
const concatsource = require('gulp-concat-sourcemap');
const gutil = require('gulp-util');
const streamify = require('gulp-streamify');
const uglify = require('gulp-uglify');

/**
 * @param gulp - function
 * @param browser - Browser sync instance
 * @param options - object
 * options.src : Path to the vendor js files.
 * options.name: The output file name
 * options.dist : Destination directory for file output.
 * @param flags - object
 * flags.minify : boolean
 * flags.sourcemap : boolean
 * @returns {Function}
 */
module.exports = function(gulp, browser, options, flags) {

  return function() {

    return gulp.src(options.src)
      .pipe(flags.minify ? streamify(uglify()) : gutil.noop())
      .pipe(flags.sourcemap ? concatsource(options.name, {sourcesContent: true, prefix: 1}) : concat(options.name))
      .pipe(gulp.dest(options.dist))
      .pipe(browser.stream());

  };

};
