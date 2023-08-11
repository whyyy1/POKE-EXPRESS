// Bring in our pokemon data
const Pokemon = require('../models/PokemonDB')


// GET /pokemon
module.exports.index = (req, res) => {
    res.render('Index', { Pokemon })
}

//  GET /fruits/:indexOfFruits
module.exports.show = async (req, res) => {
    let poke
    try {
        poke = await Pokemon.find(req.params)
        console.log(poke)
    } catch(err) {
        console.log('Failed to find Fruit document with id ' + req.params.id, err)
    }
    

    if (poke) {
        res.render('pokemon/Show', { poke })
    } else {
        res.redirect('/pokemon')
    }
}

// GET /pokemon
module.exports.new = (req, res) => {
    res.render('New')

}

module.exports.create = async (req, res) => {
    console.log(req.body)
    if (req.body.name !== undefined) {
        try {
            const pokeURL = 'https://img.pokemondb.net/artwork/'
            const imageAddress = pokeURL + req.body.name + '.jpg'

            console.log(pokeURL + req.body.name + '.jpg')
            let poke = {
                name: req.body.name,
                img: pokeURL + req.body.name[0].toLowerCase()+req.body.name.slice(1) + '.jpg'
            }
            console.log(poke)
            let pokeMade = await Pokemon.create(poke)
            console.log('Pokemon Added')
            res.redirect('/pokemon')
        } catch (e) {
            console.log(e,"Didnt make it ")
        }
    }
    else {
        console.log('Whose that pokemon?')
    }
}