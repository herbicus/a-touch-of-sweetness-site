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

    $('.contact-form-btn').on('click', function() {

      $('#emailForm').hasClass('email-open') ? this._contactFormClose() : this._contactFormOpen();

      $('#emailForm').toggleClass('email-open');

    }.bind(this));

  },

  _onSubmit: function() {
    // selectors
    var data = {
        name: $('#form_name').val(),
        email: $('#form_email').val(),
        message: $('#form_msg').val(),
        phone: $('#form_phone').val()
    };

    $.post("email.php", {
        name1: data.name,
        email1: data.email,
        message1: data.message,
        phone1: data.phone
    }, function(data) {
      // $("#returnmessage").append(data); // Append returned message to message paragraph.
      // if (data == "Your Query has been received, We will contact you soon.") {
      //   $("#form")[0].reset(); // To reset form fields on success.
      // }
    });

    $.ajax({
        type: 'POST',
        url: 'email.php',
        data: data,
        success: function() {
            console.log('success');
        }
    });

    return false;
  },

  _contactFormAnim: function() {

    if ($('#emailForm').hasClass('email-open')) {
      TweenMax.to('#emailForm', 0.25, {autoAlpha: 0, top: '55%', ease: Power4.easeOut});
      TweenMax.to('.email-container-overlay', 0.25, {
        delay: 0.0125,
        autoAlpha: 0,
        ease: Power4.easeOut, 
        onComplete: function() {
          TweenMax.set('#emailForm', {display: 'none'});
        }
      });
    } else {
      TweenMax.to('#emailForm', 0, {
        display: 'block',
        onComplete: function() {
          TweenMax.to('.email-container-overlay', 0.25, {autoAlpha: 1, ease: Power4.easeOut});
          TweenMax.to('#emailForm', 0.25, {delay: 0.0125, autoAlpha: 1, top: '50%', ease: Power4.easeOut});
        }
      });
      
    };

    $('#emailForm').toggleClass('email-open');


    console.log('clicked');
  }.bind(this),

  _contactFormOpen: function() {
    
    TweenMax.to('#emailForm', 0, {
      display: 'block',
      onComplete: function() {
        TweenMax.to('.email-container-overlay', 0.25, {autoAlpha: 1, ease: Power4.easeOut});
        TweenMax.to('#emailForm', 0.25, {delay: 0.0125, autoAlpha: 1, top: '50%', ease: Power4.easeOut});
      }
    });

  },

  _contactFormClose: function() {
    
    TweenMax.to('#emailForm', 0.25, {autoAlpha: 0, top: '55%', ease: Power4.easeOut});
    TweenMax.to('.email-container-overlay', 0.25, {
      delay: 0.0125, 
      autoAlpha: 0, 
      ease: Power4.easeOut, 
      onComplete: function() {
        TweenMax.set('#emailForm', {display: 'none'});
      }
    });

  }

});

module.exports = Email;
