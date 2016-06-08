'use strict';

var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var template = require('./email.html');

var Email = Backbone.View.extend({

  template: _.template(template()),

  events: {
    'click .l-email-container .button': '_onSubmit',
  },

  initialize: function() {
    
    this.$el.html(template());

  },

  _onSubmit: function() {
    // selectors
    var data = {
        name: $('#form_name').val(),
        email: $('#form_email').val(),
        message: $('#form_msg').val()
    };

    $.post("email.php", {
        name1: data.name,
        email1: data.email,
        message1: data.message
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
  }

});

module.exports = Email;
