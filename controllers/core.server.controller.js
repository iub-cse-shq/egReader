'use strict';

/**
 * Module dependencies.
 */
exports.index = function(req, res) {
	res.render('./../public/views/index.ejs', {
		user: req.user || null,
		request: req
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

