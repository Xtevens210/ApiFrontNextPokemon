const express = require('express');
const router = express.Router();


//Firebase
const admin = require('firebase-admin');

var serviceAccount = require("../pokeapi-byte4bit-firebase-adminsdk-geziv-b219672bc1.json");

admin.initializeApp({
    credential : admin.credential.cert(serviceAccount),
    databaseURL: 'https://pokeapi-byte4bit-default-rtdb.firebaseio.com/'
});

const db = admin.database();

//Fin de firebase

router.get('/', (req, res) => {
    db.ref('pokemones').once('value', (snapshot) => {
        const data = snapshot.val();
        res.send({pokemones: data});
    });
});

router.post('/new-pokemon', (req, res) => {
    const newPokemon = {
        name : req.body.name,
        image : req.body.image,
        id: req.body.id,
        tipo: req.body.tipo,
        habilidad : req.body.habilidad
    };
    db.ref('pokemones').push(newPokemon);
    res.send("Pokemon actualizado con exito")
    //res.send('recibido');
});

router.delete('/:id', (req, res) => {
    db.ref('pokemones/' + req.params.id).remove();
});


module.exports = router;
