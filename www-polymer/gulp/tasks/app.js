/**
 * Merges all (non LIB) javascript files into one js file using browserify.
 * @tasks/app
 */

'use strict';

const $ = require('gulp-load-plugins')();
const babelify = require('babelify');
const browserify = require('browserify');
const buffer = require('vinyl-buffer');
const source = require('vinyl-source-stream');

/**
 * @param gulp - Gulp instance
 * @param browser - Browser sync instance
 * @param options - object
 * options.entry : Path to the entry js file for browserify
 * options.name: The output file name
 * options.standalone: The global identifier when the script is not required
 * options.dist : Destination directory for file output.
 * @param flags - object
 * flags.minify : boolean
 * flags.sourcemap : boolean
 * @returns {Function}
 */
module.exports = (gulp, browser, options, flags) => {

  return () => {

    return browserify(options.entry, {debug: flags.sourcemap, standalone: options.standalone})
      .transform(babelify.configure({presets: ['es2015']}))
      .bundle()
      .on('error', function (err) { console.error(err); })
      .pipe(source(options.name))
      .pipe(flags.sourcemap ? buffer() : $.util.noop())
      .pipe(flags.sourcemap ? $.sourcemaps.init({loadMaps: true}) : $.util.noop())
      .pipe(flags.minify ? $.streamify($.uglify()) : $.util.noop())
      .pipe(flags.minify ? $.streamify($.stripDebug()) : $.util.noop())
      .pipe(flags.sourcemap ? $.sourcemaps.write('./') : $.util.noop())
      .pipe(gulp.dest(options.dist))
      .pipe(browser.stream());

  };

};
