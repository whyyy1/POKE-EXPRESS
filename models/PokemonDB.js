const mongoose = require('mongoose')

const schema = mongoose.Schema()

const pokeSchema = new schema({
    name: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
})

const pokemon = mongoose.model('pokemonData/PD',pokeSchema)

module.exports = pokemon