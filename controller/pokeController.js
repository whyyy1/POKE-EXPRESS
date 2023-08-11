// Bring in our pokemon data
const pokemon = require('../models/pokemon')


// GET /pokemon
module.exports.index = (req, res) => {
    res.render('Index', { pokemon })
}

//  GET /fruits/:indexOfFruits
module.exports.show = (req, res) => {
    console.log(pokemon[req.params.indexOfPokemon])
    if (pokemon[req.params.indexOfPokemon]) {
        res.render('Show', { poke: pokemon[req.params.indexOfPokemon], index: req.params.indexOfPokemon })
    } else {
        res.redirect('/pokemon')
    }
}

// GET /pokemon
module.exports.new =  (req, res) => {
    try {
        console.log(req.body)
        res.render('New', { pokemon })
        if(req.body.name !== undefined){
            const pokeURL = 'https://img.pokemondb.net/artwork/'
            const imageAddress = pokeURL + req.body.name + '.jpg'
    
            console.log(pokeURL + req.body.name + '.jpg')
            // res.render('New', { pokemon })
        }else{
            console.log('Whose that pokemon?')
        }
        
    } catch (e) {
        console.log(e)
    }


}