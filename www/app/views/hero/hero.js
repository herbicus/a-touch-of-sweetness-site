'use strict';

var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var template = require('./hero.html');
var waypoints = require('../../vendor/waypoints.min.js');
var AnimationController = require('../../modules/AnimationController');

var Hero = Backbone.View.extend({

  template: _.template(template()),

  initialize: function() {

    var content = {
      data: this.model.get('data')[0]
    };

    this.$el.html(this.template(content));

    /*
    * parallax hero bg only on desktop
    */
    if (!this.model.get('mobile') || !this.model.get('tablet') || this.model.get('ff') ) {
      $('#hero').addClass('parallax');
    }

    this._parallaxHero();

    if(this.model.get('ff')) {
      $('#hero').css('background-position', 'center bottom');
      $('#hero').css('background-attachment', 'inherit');
    }
  },

  _parallaxHero: function() {
    // var aboveFoldParallax = new TimelineMax({paused: false});
          
    // aboveFoldParallax.to('#hero', 1, {css:{'background-position-y': 100}});

    if ($('#hero').hasClass('parallax')) {
      
      // window.addEventListener('scroll', function() {
      // $(window).on('scroll', _.debounce(function() {
      $(window).on('scroll', function() {
        var parallaxTiming =  $(window).scrollTop();

        console.log(parallaxTiming)

        $('#hero').waypoint(function() {
          //aboveFoldParallax.play();

          // TweenMax.set('.hero-image', {css:{'background-position-y': - parallaxTiming * 0.25}});
          TweenMax.set($('.hero-image'), {y: parallaxTiming * 0.25});

        });
      });
    }
  }

});

module.exports = Hero;
