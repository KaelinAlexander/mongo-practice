const assert = require('assert');
const PokemonChar = require('../models/pokemonchar')

describe('Deleting records', function() {

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

    it('Deletes one record from the database', function(done){
        PokemonChar.findOneAndRemove({name: 'Clefairy'}).then(function(){
            PokemonChar.findOne({name: 'Clefairy'}).then(function(result){
                assert(result === null);
                done();
            })
        })
    });

});