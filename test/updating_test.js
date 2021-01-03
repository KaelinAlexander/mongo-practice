const assert = require('assert');
const PokemonChar = require('../models/pokemonchar')

describe('Updating records', function() {

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

    it('Updates one record from the database', function(done){
        PokemonChar.findOneAndUpdate({name: 'Clefairy'}, {name: 'Clefable', dexnum: 36}).then(function(){
            PokemonChar.findOne({_id: char._id}).then(function(result){
                assert(result.name === 'Clefable');
                done();
            })
        })
    });

});