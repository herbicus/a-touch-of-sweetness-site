'use strict';

var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var template = require('./services.html');

var Services = Backbone.View.extend({

  template: _.template(template()),

  initialize: function() {
    
    // underscore
    var content = {
      data: this.model.get('data')[2]
    };
    
    this.$el.html(this.template(content));
  }
  
});

module.exports = Services;
