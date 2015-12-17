'use strict';

var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var template = require('./gallery.html');
var AnimationController = require('../../modules/AnimationController');
var Slick = require('slick-carousel');

var Gallery = Backbone.View.extend({

  template: _.template(template()),

  events: {
    'click a': 'onClick',
  },

  initialize: function() {

    // underscore
    var content = {
      data: this.model.get('data')[1]
    };

    this.$el.html(this.template(content));

    this.listenTo(this.model, 'change:route', this.onRouteChange);

    this.animate = new AnimationController();

    content.data.images = [];

    // how slick
    $('#slick').slick({
      arrows: true,
      respondTo: 'slider',
      responsive: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
      dots: false,
      autoplay: true,
      autoPlaySpeed: 3000,
      prevArrow: $('.left-arrow'),
      nextArrow: $('.right-arrow')
    });

    $(window).trigger('resize');
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

    // if (this.model.get('route') === 'about' ){

    //   this.show();
    // } else {
    //   this.hide();
    // }
  }
});

module.exports = Gallery;
