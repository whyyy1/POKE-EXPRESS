
const express = require('express')

// Create our router
const router = express.Router()

// Bring in our controller logic
const pokeController = require('../controller/pokeController')

// I.N.D.U.C.E.S (Index, New, Destroy, Update, Create, Edit, Show)

// "index" route      //   localhost:8080/fruits/
router.get('/', pokeController.index)

// // "new" route
router.get('/new', pokeController.new)

// // "destroy" route
// router.delete('/:indexOfPokemon', pokeController.destroy)

// // "update" route
// router.put('/:indexOfPokemon', pokeController.update)

// "create" route
router.get('/', pokeController.new)
router.post('/',pokeController.create)

// // "edit" route
// router.get('/:indexOfPokemon/edit', pokeController.edit)

// // "show" route      //   localhost:8080/fruits/:indexOfFruit
router.get('/:indexOfPokemon', pokeController.show)


module.exports = router