const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a Schema and a Model

const BookSchema = new Schema({
    title: String,
    pages: Number
}, {
    usePushEach: true
  });

const AuthorSchema = new Schema({
    name: String,
    books: [BookSchema]
}, {
    usePushEach: true
  });

const Author = mongoose.model('author', AuthorSchema);

module.exports = Author;
