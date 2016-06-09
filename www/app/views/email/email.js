'use strict';

var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var template = require('./email.html');
var nodemailer = require('nodemailer');
var express = require('express');
var app = express();

var Email = Backbone.View.extend({

  template: _.template(template()),

  events: {

  },

  initialize: function() {
    
    this.$el.html(template());

    
    setTimeout(function() {

    	var router = express.Router();
    	app.use('/sayHello', router);
    	router.post('/', handleSayHello); // handle the route at yourdomain.com/sayHello

    	function handleSayHello(req, res) {
    	    // Not the movie transporter!
    	    var transporter = nodemailer.createTransport({
    	        service: 'Gmail',
    	        auth: {
    	            user: 'herbtorres960@gmail.com', // Your email id
    	            pass: 'solomon101' // Your password
    	        }
    	    });
    	    // ...
    	    // ...
    	    // ...
    	}

    	var text = 'Hello world from \n\n' + req.body.name;

    	transporter.sendMail(mailOptions, function(error, info){
    	    if(error){
    	        console.log(error);
    	        res.json({yo: 'error'});
    	    }else{
    	        console.log('Message sent: ' + info.response);
    	        res.json({yo: info.response});
    	    };
    	});

    }, 100);

    

    // setTimeout(function() {
    // 	// create reusable transporter object using the default SMTP transport 
    // 	var transporter = nodemailer.createTransport('smtps://user%40gmail.com:pass@smtp.gmail.com');
    	 
    // 	// setup e-mail data with unicode symbols 
    // 	var mailOptions = {
    // 	    from: '"A Sender 👥" <somebody@blurdybloop.com>', // sender address 
    // 	    to: 'herbtorres960@gmail.com', // list of receivers 
    // 	    subject: 'Hello ✔', // Subject line 
    // 	    text: 'Hello world 🐴', // plaintext body 
    // 	    html: '<b>Hello world 🐴</b>' // html body 
    // 	};
    	 
    // 	// send mail with defined transport object 
    // 	transporter.sendMail(mailOptions, function(error, info){
    // 	    if(error){
    // 	        return console.log(error);
    // 	    }
    // 	    console.log('Message sent: ' + info.response);
    // 	});
    // }, 100)

  },

  _sendMail: function() {
  	// create reusable transporter object using the default SMTP transport 
  	var transporter = nodemailer.createTransport('smtps://user%40gmail.com:pass@smtp.gmail.com');
  	 
  	// setup e-mail data with unicode symbols 
  	var mailOptions = {
  	    from: '"A Sender 👥" <somebody@blurdybloop.com>', // sender address 
  	    to: 'herbtorres960@gmail.com', // list of receivers 
  	    subject: 'Hello ✔', // Subject line 
  	    text: 'Hello world 🐴', // plaintext body 
  	    html: '<b>Hello world 🐴</b>' // html body 
  	};
  	 
  	// send mail with defined transport object 
  	transporter.sendMail(mailOptions, function(error, info){
  	    if(error){
  	        return console.log(error);
  	    }
  	    console.log('Message sent: ' + info.response);
  	});
  }

});

module.exports = Email;
