'use strict';

var $ = window.$ = window.jQuery = require('jquery');
var Backbone = require('backbone');
var Home = require('../views/home/home.js');
var Nav = require('../views/header-nav/nav.js');
var Gallery = require('../views/gallery/gallery.js');
var Contact = require('../views/contact/contact.js');
var Services = require('../views/services/services.js');
var Logo = require('../views/logo/logo.js');

var AppRouter = Backbone.Router.extend({

  model: null,
  home: null,
  contact: null,
  services: null,
  gallery: null,

  start: function( m ) {

    this.model = m;
    this.nav = new Nav({el: $('#nav'), model: this.model});
    this.home = new Home({el: $('#home'), model: this.model});
    this.gallery = new Gallery({el: $('#gallery'), model: this.model});
    this.services = new Services({el: $('#services'), model: this.model});
    this.contact = new Contact({el: $('#contact'), model: this.model});
    this.logo = new Logo({el: $('#logo'), model: this.model});


    Backbone.history.start({pushState: false});
  },

  routes: {
    '': 'routeHome',
    home: 'routeHome',
    nav: 'routeNav',
    gallery: 'routeGallery',
    contact: 'routeContact',
    services: 'routeServices',
    logo: 'routeLogo'
  },

  routeHome: function() {
    this.model.set({route: 'home'});
  },

  routeNav: function() {
    this.model.set({route: 'nav'});
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
  }
});

module.exports = AppRouter;

