'use strict';

var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var template = require('./share.html');
var waypoints = require('../../vendor/waypoints.min.js');

var Share = Backbone.View.extend({

  template: _.template(template()),

  events: {

  },

  initialize: function() {
    
    this.$el.html(template());

	this._scrolledTo();

  },

  _scrolledTo: function() {
    setTimeout(function() {
    	$('#gallery').waypoint(function() {
		  	TweenMax.to(".share-sidebar", 0.6, {
				right: 2,
				autoAlpha: 1,
				ease: Power4.easeOut
			});
		}, { offset: "25%" });
    }, 0);
  }

});

module.exports = Share;
