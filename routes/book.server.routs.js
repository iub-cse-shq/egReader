module.exports = function(app){

 var books = require('./../controllers/books.server.controller.js');
 var users = require('./../controllers/users.server.controller.js');

 app.route('/books/new')
	.get(books.new);
	
	app.route('/books/all')
	.get(books.all);
	
	app.route('/books/:bookId')
	.get(books.view);

	app.route('/books/edit/:bookId')
	.get(books.edit);
	
 app.route('/api/books')
	.get(books.list)
	.post(users.requiresLogin, books.create);

  app.route('/api/books/:bookId')
	.get(books.read)
  .delete(users.requiresLogin, books.delete);

	app.route('/api/books/edit/:bookId')
	.get(books.read)
	.put(users.requiresLogin, books.update);


app.param('bookId', books.bookByID);


}