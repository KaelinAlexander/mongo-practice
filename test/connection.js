const mongoose = require('mongoose')

// Connect to mongodb

mongoose.connect('mongodb://localhost/testaroo', { useUnifiedTopology: true, useNewUrlParser: true } );

mongoose.connection.once('open', function() {
    console.log('Connection has been made successfully. Hooray!')
}).on('error', function(error){
    console.log('Connection error:', error)
})