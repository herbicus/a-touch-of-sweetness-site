'use strict';

var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var template = require('./logo.html');

var Logo = Backbone.View.extend({

  template: _.template(template()),

  events: {
    // 'click #logo': 'onClick',
  },

  initialize: function() {
    
    this.$el.html(template());

  },

  onClick:function(event) {
    console.log('logo clicked');
  }

});

module.exports = Logo;
