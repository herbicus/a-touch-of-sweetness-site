'use strict';

var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var template = require('./logo.html');
var AnimationController = require('../../modules/AnimationController');

var Logo = Backbone.View.extend({

  template: _.template(template()),

  events: {
    'click a': 'onClick',
  },

  initialize: function() {
    

    this.listenTo(this.model, 'change:route', this.onRouteChange);

    this.$el.html(template());

    this.animate = new AnimationController();
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

module.exports = Logo;
