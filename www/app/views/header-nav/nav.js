'use strict';

var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var template = require('./nav.html');

var Nav = Backbone.View.extend({

  template: _.template(template()),

  // nav animation events
  events: {
    'click #toggleClick': 'onClick',
    'click .btn-hamburger-toggle': 'navAnimation',
    'click .btn-goto-top': 'clickHome',
    'click #gotoContent': 'clickContent',
    'click #gotoGallery': 'clickGallery',
    'click #gotoServices': 'clickServices',
    'click #gotoContact': 'clickContact'
  },

  autoHide: function() {
    if (this.model.get('isMenuOpen') === true){
      this.navAnimation();
    }
  },

  initialize: function() {
    $('main').on('click', this.autoHide.bind(this));

    this.$el.html(template());

  },

  onClick: function(event) {
    //this.navAnimation(null);
  },

  clickHome: function(e) {
    e.preventDefault();
    this.navItemClicked($('body'));
  },

  clickContent: function(e) {
    e.preventDefault();
    this.navItemClicked($('#content'));
  },

  clickGallery: function(e) {
    e.preventDefault();
    this.navItemClicked($('#gallery'));
  },

  clickServices: function(e) {
    e.preventDefault();
    this.navItemClicked($('#services'));
  },

  clickContact: function(e) {
    e.preventDefault();
    this.navItemClicked($('#contact'));
  },

  navItemClicked: function(element) {
  
    this.element = element;

    $('html, body').animate({
        scrollTop: element.offset().top
    }, 1000);

    this.navAnimation();
  },

  navAnimation: function() {

    this.model.set( 'isMenuOpen', !this.model.get('isMenuOpen'));

    // if (this.model.get('mobile') || this.model.get('tablet')) {
    //   if ($('.nav-mobile ul').hasClass('opened')) {
    //     TweenMax.to('.nav-mobile ul', 0.30, {right: -150, ease: Power2.easeOut});
    //     // TweenMax.to('.logo-lockup', 0.30, {autoAlpha: 0, ease: Power2.easeOut});
    //     TweenMax.to('.lockup-letter', 0.30, {y: 0, ease: Power1.easeOut});
    //   } else {
    //     TweenMax.to('.nav-mobile ul', 0.50, {right: 0, ease: Power2.easeOut});
    //     // TweenMax.to('.lockup-letter', 0.30, {autoAlpha: 1, ease: Power2.easeOut});
    //     TweenMax.to('.lockup-letter', 0.30, {y: -100, ease: Power1.easeOut});
    //   }
    // }
    if ($('.nav-mobile ul').hasClass('opened')) {
      TweenMax.to('.nav-mobile ul', 0.30, {right: -150, ease: Power2.easeOut});
      // TweenMax.to('.logo-lockup', 0.30, {autoAlpha: 0, ease: Power2.easeOut});
      TweenMax.to('.lockup-letter', 0.30, {y: 0, ease: Power1.easeOut});
    } else {
      TweenMax.to('.nav-mobile ul', 0.50, {right: 0, ease: Power2.easeOut});
      // TweenMax.to('.lockup-letter', 0.30, {autoAlpha: 1, ease: Power2.easeOut});
      TweenMax.to('.lockup-letter', 0.30, {y: -100, ease: Power1.easeOut});
    };

    $('.nav-mobile ul').toggleClass('opened');

  }
});

module.exports = Nav;

