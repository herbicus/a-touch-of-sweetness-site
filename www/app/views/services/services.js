'use strict';

var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var template = require('./services.html');
var AnimationController = require('../../modules/AnimationController');

var Services = Backbone.View.extend({

  template: _.template(template()),

  events: {
    'click a': 'onClick',
  },

  initialize: function() {
    
    // underscore
    var content = {
      data: this.model.get('data')[2]
    };
    this.$el.html(this.template(content));

    this.listenTo(this.model, 'change:route', this.onRouteChange);

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

    // if (this.model.get('route') === 'update' ){
    //   this.show();
    // } else {
    //   this.hide();
    // }
  }
});

module.exports = Services;
