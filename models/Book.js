var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var BookSchema = {

  name: {
    type: String,
    default: '',
    trim: true,
    required: 'Name required'
  },

img: {
    type: String,
    default: '',
    trim:true,
    required:'image required!'
    
  },
  pdf: {
    type: String,
    default: '',
    trim:true,
  
  },
  
  auth_name: {
    type: String,
    default: '',
    trim: true,
    required: 'Author Name required'
  },
  
 description: {
    type: String,
    default: '',
    trim: true
    
  },
  
/*   price: {
    type: Number,
    trim: true,
    required: 'Price required'
  },
  
  quantity: {
    type: Number,
    default: 1,
    trim: true,
    required: 'Quantity required'
  },
  */
  
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },

created: {
    type: Date,
    default: Date.now
  }
}

var Book = mongoose.model('Book', BookSchema, 'books');
module.exports = Book;
