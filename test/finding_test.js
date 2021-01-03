const assert = require('assert');
const PokemonChar = require('../models/pokemonchar')

describe('Finding records', function() {

    let char;

    beforeEach(function(done){
        char = new PokemonChar({
            name: 'Clefairy',
            dexnum: 35,
            type1: 'Fairy',
            type2: null
        });

        char.save().then(function() {
            done();
        });
    });

    it('Finds one record from the database', function(done){
            PokemonChar.findOne({name: 'Clefairy'}).then(function(result){
                assert(result.name === 'Clefairy');
                done();
            })
    });

    it('Finds one record by ID from the database', function(done){
        PokemonChar.findOne({ _id: char._id }).then(function(result){
            assert(result._id.toString() === char._id.toString());
            done();
        })
    });

});