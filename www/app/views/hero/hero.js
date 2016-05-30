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
  }

});

module.exports = Hero;
