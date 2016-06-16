'use strict';

var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var template = require('./contact.html');

var Contact = Backbone.View.extend({

  template: _.template(template()),

  initialize: function() {
    
    // underscore
    var content = {
      data: this.model.get('data')[3]
    };
    
    this.$el.html(this.template(content));
  }
  
});

module.exports = Contact;
