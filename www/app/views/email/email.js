'use strict';

var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var template = require('./email.html');

var Email = Backbone.View.extend({

  template: _.template(template()),

  events: {
    'click .l-email-container .button': '_onSubmit'
  },

  initialize: function() {
    
    this.$el.html(template());

    $('.contact-form-btn').on('click', this._contactFormAnim.bind(this));

  },

  _onSubmit: function(e) {
    e.preventDefault();

    var _email = $('#form_email').val();

    if (this._validateEmail(_email) && !_email == '') {

      this._ajaxCall();

    } else {

      this._validateEmailMessage();

    }

  },

  _validateEmail: function(email) {
    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
  },

  _ajaxCall: function() {

    // TODO: validation/honeypot
    var data = {
      name: $('#form_name').val(),
      email: $('#form_email').val(),
      message: $('#form_msg').val(),
      phone: $('#form_phone').val()
    };

    $.post('email.php', {
      name1: data.name,
      email1: data.email,
      message1: data.message,
      phone1: data.phone
    });

    $.ajax({
      type: 'POST',
      url: 'email.php',
      data: data,
      
      /*
      * on success - display thank you message
      * close out email form window
      * reset form fields
      */
      success: function() {
        TweenMax.to($('.thank-you'), 0.25, {
          autoAlpha: 1, 
          ease: Power4.easeOut,
          onComplete: function() {
            setTimeout(function() {
              TweenMax.to($('#emailForm'), 0.45, {autoAlpha: 0, top: '52%', ease: Power4.easeOut});
              TweenMax.to($('.email-container-overlay'), 0.45, {
                delay: 0.25, 
                autoAlpha: 0, 
                ease: Power4.easeOut, 
                onComplete: function() {
                  TweenMax.set($('#emailForm'), {display: 'none'});
                  TweenMax.set($('.thank-you'), {autoAlpha: 0});
                }
              });

              $('#emailForm').toggleClass('email-open');

              $('.l-email-container form')[0].reset(); // reset form fields on success.

            }, 1000);
          }
        });
      },

      /*
      * on error - display error message
      * close out email form window
      * reset form fields
      */
      error: function() {
        TweenMax.to($('.error-email'), 0.25, {
          autoAlpha: 1, 
          ease: Power4.easeInOut,
          onComplete: function() {
            TweenMax.to($('#emailForm'), 0.45, {autoAlpha: 0, delay: 2, top: '52%', ease: Power4.easeOut});
            TweenMax.to($('.email-container-overlay'), 0.45, {
              delay: 2.25, 
              autoAlpha: 0, 
              ease: Power4.easeOut, 
              onComplete: function() {
                TweenMax.set($('#emailForm'), {display: 'none'});
                TweenMax.set($('.error-email'), {autoAlpha: 0});
              }
            });

            $('#emailForm').toggleClass('email-open');

            $('.l-email-container form')[0].reset();
          }
        });
      }
    });

    return false;

  },

  _contactFormAnim: function() {

    $('#emailForm').hasClass('email-open') ? this._contactFormClose() : this._contactFormOpen();

    $('#emailForm').toggleClass('email-open');

  },

  _contactFormOpen: function() {
    
    TweenMax.to($('#emailForm'), 0, {
      display: 'block',
      onComplete: function() {
        TweenMax.to($('.email-container-overlay'), 0.25, {autoAlpha: 1, ease: Power4.easeOut});
        TweenMax.to($('#emailForm'), 0.25, {delay: 0.0125, autoAlpha: 1, top: '50%', ease: Power4.easeOut});
      }
    });

  },

  _contactFormClose: function() {
    
    TweenMax.to($('#emailForm'), 0.25, {autoAlpha: 0, top: '52%', ease: Power4.easeOut});
    TweenMax.to($('.email-container-overlay'), 0.25, {
      delay: 0.0125, 
      autoAlpha: 0, 
      ease: Power4.easeOut, 
      onComplete: function() {
        TweenMax.set($('#emailForm'), {display: 'none'});
      }
    });

  },

  _validateEmailMessage: function() {
    TweenMax.to($('.validate-email'), 0.25, {
      autoAlpha: 1.25, 
      ease: Power4.easeInOut,
      onComplete: function() {
        TweenMax.to($('.validate-email'), 0.25, {
          delay: 1,
          autoAlpha: 0,
          ease: Power4.easeInOut
        });
      }
    });
  }

});

module.exports = Email;
