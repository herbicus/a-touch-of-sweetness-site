/**
 * Merges all stylus and css files into one css file.
 * @tasks/styles
 */

'use strict';

const $ = require('gulp-load-plugins')();
const nib = require('nib');

/**
 * @param gulp - Gulp instance
 * @param browser - Browser sync instance
 * @param options - object
 * options.entry : Path to the entry stylus or css file.
 * options.dist : Destination directory for file output.
 * @param flags - object
 * flags.minify : boolean
 * flags.sourcemap : boolean
 * @returns {Function}
 *
 * Note: if you pass flags.minify and flags.sourcemap both as true
 * then line numbers from the orginal files are injected but no minification happens.
 */
module.exports = (gulp, browser, options, flags) => {

  return () => {

    let settings = {};

    if (flags.sourcemap === true) {

      if (flags.minify === true) {

        // dev - concat CSS with sourcemap but do not minify
        // as doing so breaks the sourcemaps
        // a work around is to include line numbers back to the styl files

        Object.assign(settings, {
          use: [nib()],
          'include css': true,
          linenos: true
        });

      } else {

        // local

        Object.assign(settings, {
          use: [nib()],
          'include css': true,
          sourcemap: {
            inline: true
          }
        });

      }

    } else {

      // prod minify with no sourcemap

      Object.assign(settings, {
        use: [nib()],
        'include css': true
      });

    }

    return gulp.src(options.entry)
      .pipe($.stylus(settings))
      .pipe(flags.sourcemap ? $.util.noop() : $.csso())
      .pipe(gulp.dest(options.dist))
      .pipe(browser.stream());

  };

};
