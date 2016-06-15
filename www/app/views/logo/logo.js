'use strict';

var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var template = require('./logo.html');

var Logo = Backbone.View.extend({

  template: _.template(template()),

  initialize: function() {
    
    this.$el.html(template());

  }

});

module.exports = Logo;
