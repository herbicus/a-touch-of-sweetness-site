/**
 * Runs eslint tests on app src
 * @tasks/eslint
 */

'use strict';

const $ = require('gulp-load-plugins')();

/**
 * @param gulp - Gulp instance
 * @param options - object
 * options.src : JS files to test.
 * @returns {Function}
 */
module.exports = (gulp, options) => {

  return () => {

    return gulp.src(options.src)
        .pipe($.eslint.format())
        .pipe($.eslint.failAfterError());

  };

};
