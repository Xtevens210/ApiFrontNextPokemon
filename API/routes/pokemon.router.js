const express = require('express');
const router = express.Router();
const listaPokemon = require('../lib/PokemonDB')

router.get('/', (req, res) => {
    res.status(200).json(listaPokemon.pokemon);
});

router.delete('/:id', (req, res)=>{
    const {id} = req.params;
    const index = listaPokemon.pokemon.findIndex(pokemon => pokemon.id == id);
    listaPokemon.pokemon.splice(index, 1);
    res.send("Pokemon borrado");
});

module.exports = router;
