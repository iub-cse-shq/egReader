'use strict';
var mongoose = require('mongoose');
var Book = require('./../models/Book.js');
var errorHandler = require('./errors.server.controller');
/**
 * Module dependencies.
 */
exports.index = function(req, res) {
	
	  Book.find(function(err, data) {
    if (err) {
      return res.status(400).send({

  				message: errorHandler.getErrorMessage(err)
  			});
    } else {
      console.log("api called");
      	res.render('./../public/views/index.ejs', {
		user: req.user || null,
		request: req,
		books:data
	});
}
});

};

exports.about = function(req, res) {
	res.render('./../public/views/user/about.ejs', {
		user: req.user || null,
		request: req
	});
};

exports.login = function(req, res) {
	res.render('./../public/views/user/login.ejs', {
		user: req.user || null,
		request: req
	});
};

exports.services = function(req, res) {
	res.render('./../public/views/user/services.ejs', {
		user: req.user || null,
		request: req
	});
};

exports.signup = function(req, res) {
	res.render('./../public/views/user/signup.ejs', {
		user: req.user || null,
		request: req
	});
};

