class Book
  @isbn
  constructor: (title = '', author = '')->
    { @title, @author } = { title, author }

class Library
  constructor: (name = '', books = [])->
    { @name, @books } = { name, books }

module.exports = exports = {
  Book:     Book
  Library:  Library
}
