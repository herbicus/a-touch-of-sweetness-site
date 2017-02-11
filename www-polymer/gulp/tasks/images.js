/**
 * Copy images.
 * @tasks/images
 */

'use strict';

const $ = require('gulp-load-plugins')();

/**
 * @param gulp - Gulp instance
 * @param browser - Browser sync instance
 * @param options - object
 * options.src : Directory of images to optimize.
 * options.dist : Output directory.
 * @param flags - object
 * flags.minify : boolean
 * flags.sourcemap : boolean
 * @returns {Function}
 */
module.exports = (gulp, browser, options, flags) => {

  return () => {

    return gulp.src(options.src)
      .pipe(gulp.dest(options.dist))
      .pipe(browser.stream());

  };

};
