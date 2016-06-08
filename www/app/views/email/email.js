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

    $(".l-email-container .button").click(function() {
        var name = $("#form_name").val();
        var email = $("#form_email").val();
        var text = $("#msg_text").val();

    		var data = {
    		    name: $("#form_name").val(),
    		    email: $("#form_email").val(),
    		    message: $("#msg_text").val()
    		};

    		$.ajax({
    		    type: "POST",
    		    url: "email.php",
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
