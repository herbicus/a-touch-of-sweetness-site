/**
 * Deletes specified directory.
 * @tasks/clean
 */

'use strict';

const del = require('del');

/**
 * @param gulp - Gulp instance
 * @param options - object
 * options.src : Directory to delete.
 * @returns {Function}
 */
module.exports = (gulp, options) => {

  return (done) => {

    del.sync(options.src, {force: true});
    done();

  };

};
