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

  },

  initialize: function() {
    // underscore
    var content = {
      data: this.model.get('data')[1]
    };

    this.$el.html(this.template(content));

    this.animate = new AnimationController();

    content.data.images = [];

    // how slick
    $('#slickCakes').slick({
      arrows: true,
      lazyLoad: 'ondemand',
      respondTo: 'slider',
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
      dots: false,
      responsive: [
       {
         breakpoint: 480,
         settings: {
           slidesToShow: 1
         }
       }
      ],
      prevArrow: $('.left-arrow-cakes'),
      nextArrow: $('.right-arrow-cakes')
    });

    $('#slickCupCakes').slick({
      arrows: true,
      lazyLoad: 'ondemand',
      respondTo: 'slider',
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
      dots: false,
      responsive: [
       {
         breakpoint: 480,
         settings: {
           slidesToShow: 1
         }
       }
      ],
      prevArrow: $('.left-arrow-cupcakes'),
      nextArrow: $('.right-arrow-cupcakes')
    });

    $('#slickFruitCarvings').slick({
      arrows: true,
      lazyLoad: 'ondemand',
      respondTo: 'slider',
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
      dots: false,
      responsive: [
       {
         breakpoint: 480,
         settings: {
           slidesToShow: 1
         }
       }
      ],
      prevArrow: $('.left-arrow-fruit-carvings'),
      nextArrow: $('.right-arrow-fruit-carvings')
    });

    $(window).trigger('resize');

  },



  hide: function() {
    this.animate.animateOut(this.el);
  },

  show: function() {
    this.animate.animateIn(this.el);
  }

});

module.exports = Gallery;
