const assert = require('assert');
const mongoose = require('mongoose');
const Author = require('../models/author')

// Describe our tests:

describe('Nesting records', function() {

    beforeEach(function(done){
        mongoose.connection.collections.authors.drop(function(){
            done();
        })
    });

// Create tests:

    it('Creates an author with sub-documents', function(done){
        var eliot = new Author({
            name: 'Eliot',
            age: 50,
            books: [{title: 'Middlemarch', pages: 800}]
        });

        eliot.save().then(function(){
            Author.findOne({name: 'Eliot'}).then(function(record){
                assert(record.books.length === 1);
                done();
            });
        });
    });

    it('Adds a book to an existing author', function(done){
        var eliot = new Author({
            name: 'Eliot',
            age: 50,
            books: [{title: 'Middlemarch', pages: 800}]
        });

        eliot.save().then(function() {
            Author.findOne({name: 'Eliot'}).then(function(record){
            // add a book to the books array
            record.books.push({title: 'The Mill on the Floss', pages: 500});
            record.save().then(function(){
                Author.findOne({name: 'Eliot'}).then(function(result){
                    assert(result.books.length === 2);
                    done();
                })
            })
            })
        })
    });



});