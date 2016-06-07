'use strict';

var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var template = require('./hero.html');
var AnimationController = require('../../modules/AnimationController');

var Hero = Backbone.View.extend({

  template: _.template(template()),

  events: {

  },

  initialize: function() {

    var content = {
      data: this.model.get('data')[0]
    };

    this.$el.html(this.template(content));

    this.animate = new AnimationController();

    if (!this.model.get('mobile')) {
      $('#hero').addClass('parallax');
    }

    this._parallaxHero();
  },

  _parallaxHero: function() {
      var aboveFoldParallax = new TimelineMax({paused: true});
            
      aboveFoldParallax.to("#hero", 1, {css:{"background-position-y": 100}});

      if ($('#hero').hasClass('parallax')) {
        window.addEventListener("scroll", function(){
          var parallaxTiming = document.body.scrollTop / 5000;

          $("#hero").waypoint(function() {

            aboveFoldParallax.seek(parallaxTiming);

          }, { offset: "90%" });
        });
      };
  }

});

module.exports = Hero;
