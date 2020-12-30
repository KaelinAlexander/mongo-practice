const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create Schema and Model

const PokemonCharSchema = new Schema({
    name: String,
    dexnum: Number,
    type1: String,
    type2: String
});

const PokemonChar = mongoose.model('pokemonchar', PokemonCharSchema);

module.exports = PokemonChar;