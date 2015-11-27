'use strict';

var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var template = require('./contact.html');
var AnimationController = require('../../modules/AnimationController');

var Contact = Backbone.View.extend({

  template: _.template(template()),

  events: {
    'click a': 'onClick',
  },

  initialize: function() {
    
    // underscore
    var content = {
      data: this.model.get('data')[3]
    };
    this.$el.html(this.template(content));

    this.listenTo(this.model, 'change:route', this.onRouteChange);

    this.animate = new AnimationController();
  },

  hide: function() {
    
  },

  show: function() {

  },

  onClick:function(event) {
    // tracking call here
  },

  onRouteChange: function() {

    // if (this.model.get('route') === 'contact' ){
    //   this.show();
    // } else {
    //   this.hide();
    // }
  }
});

module.exports = Contact;
