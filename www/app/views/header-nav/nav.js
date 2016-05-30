'use strict';

var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var template = require('./nav.html');
var ScrollTo = require('../../vendor/gsap/ScrollToPlugin');

var Nav = Backbone.View.extend({

  template: _.template(template()),

  // nav animation events
  events: {
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

  clickHome: function() {

    TweenMax.to($(window), 1, {
        scrollTo: {
            y: $('body').offset().top, 
            autoKill: true
        }, 
        ease:Power4.easeOut 
     });

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

    TweenMax.to($(window), 1.75, {
        scrollTo: {
            y: element.offset().top - 50, 
            autoKill: true
        }, 
        ease:Power4.easeOut 
     });

  },

  navOpen: function() {
    TweenMax.to('.nav-mobile ul', 0.50, {right: 0, ease: Power2.easeOut});
  },

  navClose: function() {
    TweenMax.to('.nav-mobile ul', 0.30, {right: -150, ease: Power2.easeOut});
  },

  navAnimation: function() {

    this.model.set( 'isMenuOpen', !this.model.get('isMenuOpen'));

    $('.nav-mobile ul').hasClass('opened') ? this.navClose() : this.navOpen();

    $('.nav-mobile ul').toggleClass('opened');

  }

});

module.exports = Nav;

