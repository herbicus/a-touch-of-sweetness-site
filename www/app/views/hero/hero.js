'use strict';

var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var template = require('./hero.html');
var AnimationController = require('../../modules/AnimationController');

var Hero = Backbone.View.extend({

  template: _.template(template()),

  events: {
    'click a': 'onClick',
  },

  initialize: function() {
    this.listenTo(this.model, 'change:route', this.onRouteChange);

    var content = {
      data: this.model.get('data')[0]
    };

    this.$el.html(this.template(content));

    this.animate = new AnimationController();
  },

  hide: function() {
    this.animate.animateOut(this.el);
  },

  show: function() {
    this.animate.animateIn(this.el);
  },

  onClick:function(event) {
    // tracking call here

  },

  onRouteChange: function() {
    // if (this.model.get('route') === 'home' ){
    //   this.show();
    // } else {
    //   this.hide();
    // }
  }
});

module.exports = Hero;
