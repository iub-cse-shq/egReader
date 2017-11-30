var mongoose = require('mongoose');
var Book = require('./../models/Book.js');
var errorHandler = require('./errors.server.controller');
var _ = require('lodash');



exports.all = function(req, res) {
  Book.find(function(err, data) {
    if (err) {
      return res.status(400).send({

  				message: errorHandler.getErrorMessage(err)
  			});
    } else {
      console.log("api called");
      	res.render('./../public/views/book/all.ejs', {
		user: req.user || null,
		request: req,
		books:data
	});
}
});
};
 
   

 exports.new = function(req, res) {
	res.render('./../public/views/book/create.ejs', {
		user: req.user || null,
		request: req
	});
};

 exports.edit = function(req, res) {
	res.render('./../public/views/book/edit.ejs', {
		user: req.user || null,
		request: req
	});
};

 exports.view = function(req, res) {
	res.render('./../public/views/book/view.ejs', {
		user: req.user || null,
		request: req
	});
};

module.exports.list = function(req, res) {
  Book.find(function(err, data) {
    if (err) {
      return res.status(400).send({

  				message: errorHandler.getErrorMessage(err)
  			});
    } else {
      console.log("api called");

      res.status(200).send(data);
    }
  });
};

module.exports.create = function(req, res) {
  var book = new Book(req.body);
  book.user = req.user;
  book.save(function(err, data) {
    if (err) {
      return res.status(400).send({

  				message: errorHandler.getErrorMessage(err)
  			});
    } else {
      res.status(200).send(data);
    }
  });
};

module.exports.read = function(req, res) {
  res.json(req.book);
};


exports.delete = function(req, res) {
	var book = req.book;
	book.remove(function(err) {
		if (err) {
			return res.status(400).send();
		} else {
			res.json(book);
		}
	});
};


module.exports.update = function(req, res) {
  var book = req.book;

  	book = _.extend(book, req.body);

  	book.save(function(err) {
  		if (err) {
  			return res.status(400).send();
  		} else {
  			res.json(book);
  		}
  	});
};

exports.bookByID = function(req, res, next, id) {
	Book.findById(id).populate('user', 'email').exec(function(err, book) {
		if (err) return next(err);
		if (!book) return next(new Error('Failed to load book ' + id));
		req.book = book;
		next();
	});
};