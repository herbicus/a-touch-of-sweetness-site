'use strict';

var $ = window.$ = window.jQuery = require('jquery');
var Backbone = require('backbone');
var Nav = require('../views/header-nav/nav.js');
var Hero = require('../views/hero/hero.js');
var Content = require('../views/content/content.js');
var Gallery = require('../views/gallery/gallery.js');
var Contact = require('../views/contact/contact.js');
var Services = require('../views/services/services.js');
var Logo = require('../views/logo/logo.js');
var Custom = require('../views/title-custom/custom.js');
var Taste = require('../views/title-taste/taste.js');
var Trays = require('../views/title-trays/trays.js');

var AppRouter = Backbone.Router.extend({

  model: null,
  hero: null,
  content: null,
  contact: null,
  services: null,
  gallery: null,

  start: function( m ) {

    this.model = m;
    this.nav = new Nav({el: $('#nav'), model: this.model});
    this.hero = new Hero({el: $('#hero'), model: this.model});
    this.content = new Content({el: $('#content'), model: this.model});
    this.gallery = new Gallery({el: $('#gallery'), model: this.model});
    this.services = new Services({el: $('#services'), model: this.model});
    this.contact = new Contact({el: $('#contact'), model: this.model});
    this.logo = new Logo({el: $('.logo'), model: this.model});
    this.custom = new Custom({el: $('.title-custom'), model: this.model});
    this.taste = new Taste({el: $('.title-taste'), model: this.model});
    this.trays = new Trays({el: $('.title-trays'), model: this.model});


    Backbone.history.start({pushState: false});
  },

  routes: {
    '': 'routeHero',
    nav: 'routeNav',
    hero: 'routeHero',
    content: 'routeContent',
    gallery: 'routeGallery',
    contact: 'routeContact',
    services: 'routeServices',
    logo: 'routeLogo',
    custom: 'routeCustom',
    taste: 'routeTaste',
    trays: 'routeTrays'
  },

  routeNav: function() {
    this.model.set({route: 'nav'});
  },

  routeHero: function() {
    this.model.set({route: 'hero'});
  },

  routeContent: function() {
    this.model.set({route: 'content'});
  },

  routeGallery: function() {
    this.model.set({route: 'gallery'});
  },

  routeServices: function() {
    this.model.set({route: 'services'});
  },

  routeUpdate: function() {
    this.model.set({route: 'update'});
  },

  routeLogo: function() {
    this.model.set({route: 'logo'});
  },

  routeCustom: function() {
    this.model.set({route: 'title-custom'});
  },

  routeTaste: function() {
    this.model.set({route: 'title-taste'});
  },

  routeTrays: function() {
    this.model.set({route: 'title-trays'});
  }
});

module.exports = AppRouter;

