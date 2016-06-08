'use strict';

var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var template = require('./email.html');

var Email = Backbone.View.extend({

  template: _.template(template()),

  events: {

  },

  initialize: function() {
    
    this.$el.html(template());

    $('.l-email-container .button').click(function() {


    		var data = {
    		    name: $('#form_name').val(),
    		    email: $('#form_email').val(),
    		    message: $('#msg_text').val()
    		};

  		  // $.post('email.php', {
  		  //   name1: name,
  		  //   email1: email,
  		  //   message1: message
    		// });

        $.post("email.php", {
            name1: data.name,
            email1: data.email,
            message1: data.message
        }, function(data) {
          // $("#returnmessage").append(data); // Append returned message to message paragraph.
          // if (data == "Your Query has been received, We will contact you soon.") {
          //   $("#form")[0].reset(); // To reset form fields on success.
          // }
          console.log(data);
        });

    		$.ajax({
    		    type: 'POST',
    		    url: 'email.php',
    		    data: data,
    		    success: function(){
    		        console.log('success');
    		    }
    		});

        return false;
    });

  }

});

module.exports = Email;
