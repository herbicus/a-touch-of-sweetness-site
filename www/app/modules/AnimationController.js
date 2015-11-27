'use strict';

var TweenMax = require('../vendor/gsap/TweenMax');

module.exports = function() {

  // show();
  this.animateIn = function(element) {
    this.element = element;

  	TweenMax.to(element, 0.45, {
      autoAlpha: 1,
      top: 0,
  	  ease: Power1.easeOut
  	});
  };

  // hide();
  this.animateOut = function(element) {
  	this.element = element;
    
  	TweenMax.to(element, 1, {
      top: '100%',
  	  ease: Power4.easeOut,
      onComplete: function() {
        TweenMax.set(element, {autoAlpha: 0, top: '-100%'});
        console.log('onComplete()');
      }
  	});
  };

};
