const assert = require('assert');
const PokemonChar = require('../models/pokemonchar')

// //Describe Tests Template
// describe('some demo tests', function() {
//     // Create Tests
//     it('adds two numbers together', function(){
//         assert(2 + 3 === 5)
//     })
// });

// Saving Tests

describe('Saving records', function() {
    // Create Tests
    it('saves a record to the database', function(done){
        let char = new PokemonChar({
            name: 'Clefairy',
            dexnum: 35,
            type1: 'Fairy',
            type2: null
        });

        char.save().then(function() {
            assert(char.isNew === false);
            done();
        });
    })
});