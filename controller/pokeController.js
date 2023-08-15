// Bring in our pokemon data
const Pokemon = require('../models/PokemonDB')


// GET /pokemon
module.exports.index = async (req, res) => {
    let pokemon;
    console.log(req.body.name)
    try {
        pokemon = await Pokemon.find()
        
    } catch(err) {
        console.log('Failed to create a flight document: ', err)
    }
    
   
    

    res.render('Index', { pokemon })
}

//  GET /fruits/:indexOfFruits
module.exports.show = async (req, res) => {

    let poke
    
    try {
        poke = await Pokemon.findById(req.params.id)
        
    } catch(err) {
        console.log('Failed to find Fruit document with id ' + req.params.id, err)
    }
   
  
    
    if (poke) {
        res.render('Show', { poke: poke })
    } else {
        res.redirect('/pokemon')
    }
}

// GET /pokemon
module.exports.new = (req, res) => {
    
    res.render('New')

}

module.exports.create = async (req, res) => {
   
    if (req.body.name !== undefined) {
        try {
            const pokeURL = 'https://img.pokemondb.net/artwork/large/'
            let imageAddress = pokeURL + req.body.name.toLowerCase() + '.jpg'

            console.log(pokeURL + req.body.name + '.jpg')
            req.body.img = pokeURL + req.body.name + '.jpg'
            
            let pokeMade = await Pokemon.create(req.body)
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


// DELETE /fruits/:id
module.exports.destroy = async (req, res) => {
    console.log('DELETE /pokemon/:id')

    try {
        await Pokemon.findByIdAndDelete(req.params.id)
    } catch(err) {
        console.log(err.message)
    }

    res.redirect('/pokemon')
}

// DELETE /pokemon/clear
module.exports.clear = async (req, res) => {
    console.log('DELETE /pokemon/clear')

    try {
        await Pokemon.deleteMany({})
    } catch(err) {
        console.log(err.message)
    }

    res.redirect('/pokemon')
}