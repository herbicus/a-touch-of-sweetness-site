'use strict';

var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var template = require('./content.html');

var Content = Backbone.View.extend({

  template: _.template(template()),

  initialize: function() {

    var content = {
      data: this.model.get('data')[0]
    };

    this.$el.html(this.template(content));

  }

});

module.exports = Content;
