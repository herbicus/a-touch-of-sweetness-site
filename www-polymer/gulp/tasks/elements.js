/**
 * Vulcanize Polymer elements to combine them into one file to load and do
 * some post-processing
 * @tasks/elements
 */

'use strict';

const $ = require('gulp-load-plugins')();

/**
 * @param gulp - Gulp instance
 * @param browser - Browser sync instance
 * @param options - object
 * options.src : Glob for all elements files
 * options.entry : Path to the entry elements file.
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

  function dev() {

    return gulp.src(options.src)
      .pipe(gulp.dest(options.dist))
      .pipe(browser.stream());

  }

  function prod() {

    return gulp.src(options.entry)
      .pipe($.vulcanize({
        inlineCss: true,
        inlineScripts: true,
        stripComments: true
      }))
      .pipe($.htmlmin({
        removeEmptyAttributes: true,
        customAttrAssign: [{"source":"\\$="}],
        customAttrSurround: [
          [ {"source": "\\({\\{"}, {"source": "\\}\\}"} ],
          [ {"source": "\\[\\["}, {"source": "\\]\\]"}  ]
        ],
        collapseWhitespace: true,
        // always leave one space
        // because http://perfectionkills.com/experimenting-with-html-minifier/#collapse_whitespace
        conservativeCollapse: true,
        minifyJS: true,
        minifyCSS: true,
        removeComments: true,
        removeCommentsFromCDATA: true,
        removeCDATASectionsFromCDATA: true
      }))
      .pipe(gulp.dest(options.dist))
      .pipe(browser.stream());

  }

  return () => {

    return flags.sourcemap ? dev() : prod();

  };

};
