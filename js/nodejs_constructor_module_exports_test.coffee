chai = require "chai"
chai.should()

describe "returning constructor from node js module", ->

  Book    = null
  Library = null

  before ->
    aModule = require "./nodejs_constructor_module_exports"
    Book    = aModule.Book
    Library = aModule.Library

  describe "book", ->

    it "exists", ->
      new Book().should.exist

    it "has instances", ->
      book1 = new Book 'a book', 'from an author'
      book2 = new Book 'another book', 'from another author'

      book1.title.should.not.equal(book2.title)


  describe "library", ->

    it "exists", ->
      Library.should.exist


    describe "constructor", ->

      it "with default values", ->
        lib = new Library()
        lib.name.should.equal ''
        lib.books.length.should.equal 0

      it "with specific values", ->
        new Library('Athena').name.should.equal 'Athena'


      describe "with books", ->

        beforeEach ->
          @lib = new Library('Book Treasure',
            [new Book('first book'), new Book('second book')])

        it "creates", ->
          @lib.books.length.should.equal 2
          @lib.books[0].title.should.equal 'first book'
          @lib.books[1].title.should.equal 'second book'
