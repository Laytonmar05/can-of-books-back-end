// Build a Mongoose 'Book' schema with valid keys for `title`, `description`, and `status`. 
// Modularize your code by putting your schema and model in its own separate file and requiring the schema into your server.

'use strict';

const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {type: String},
  description: {type: String},
  status: {type: String, uppercase: true, enum: ['LIFE-CHANGING', 'FAVORITE FIVE', 'RECOMMENDED TO ME']},
});

// Use your schema to craft a Book model.
const bookModel = mongoose.model('book', bookSchema);

module.exports = bookModel;