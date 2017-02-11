/**
 * Copies a specified directory to another location.
 * @tasks/static
 */

'use strict';

const $ = require('gulp-load-plugins')();

/**
 * @param gulp - Gulp instance
 * @param browser - Browser sync instance
 * @param options - object
 * options.src : Directory to copy.
 * options.dist : Destination to copy options.src to.
 * @returns {Function}
 */
module.exports = (gulp, browser, options) => {

  return () => {

    return gulp.src(options.src)
        .pipe($.useref({ searchPath: ['app'] }))
        .pipe(gulp.dest(options.dist))
        .pipe(browser.stream());

  };

};
