'use strict';

var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var template = require('./gallery.html');
var Slick = require('slick-carousel');

var Gallery = Backbone.View.extend({

  template: _.template(template()),

  initialize: function() {
    var content = {
      data: this.model.get('data')[1]
    };

    this.$el.html(this.template(content));

    content.data.images = [];

    this._galleryCakes();
    this._galleryCupcakes();
    this._galleryCarvings();

    $(window).trigger('resize');

  },

  _galleryCakes: function() {

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

  },

  _galleryCupcakes: function() {

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

  },

  _galleryCarvings: function() {

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

  }

});

module.exports = Gallery;
