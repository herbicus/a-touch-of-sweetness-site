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
    'click #gotoGallery': 'onClick',
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
    $('#slickCakes').slick({
      arrows: true,
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

    // $('#gotoGallery').click(function(e) {
    //   e.preventDefault();
    //   $('html, body').animate({
    //       scrollTop: $('#gallery').offset().top -1
    //   }, 2000);
    // });
  },



  hide: function() {
    this.animate.animateOut(this.el);
  },

  show: function() {
    this.animate.animateIn(this.el);
  },

  onClick:function(event) {
    // $('html, body').animate({
    //     scrollTop: $('#gallery').offset().top -1
    // }, 2000);
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
