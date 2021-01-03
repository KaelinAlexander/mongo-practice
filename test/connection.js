const mongoose = require('mongoose')
// mongoose.set('useFindAndModify', false);

// ES6 Promises

mongoose.Promise = global.Promise

// Connect to DB before tests run:

before(function(done){
    // Connect to mongodb
    mongoose.connect('mongodb://localhost/testaroo', { useUnifiedTopology: true, useNewUrlParser: true } );
    mongoose.connection.once('open', function() {
        console.log('Connection has been made successfully. Hooray!');
        done();
    }).on('error', function(error){
        console.log('Connection error:', error)
    })  
})

// Drop the characters collection before every test.

beforeEach(function(done) {
    // Drop the collection:
    mongoose.connection.collections.pokemonchars.drop(function(){
        done();
    })
})