'use strict';

import behaviors from './behaviors';

// Page is ready
document.addEventListener('DOMContentLoaded', function() {

  // See https://github.com/Polymer/polymer/issues/1381
  window.addEventListener('WebComponentsReady', function() {
    // imports are loaded and elements have been registered
  });

});

export { behaviors };
