'use strict';

var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var template = require('./taste.html');

var Taste = Backbone.View.extend({

  template: _.template(template()),

  events: {

  },

  initialize: function() {
    
    this.$el.html(template());

  }

});

module.exports = Taste;
