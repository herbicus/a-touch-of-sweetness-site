'use strict';

var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var template = require('./email.html');

var Email = Backbone.View.extend({

  template: _.template(template()),

  events: {

  },

  initialize: function() {
    
    this.$el.html(template());

  }

});

module.exports = Email;
