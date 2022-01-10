const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());


const PORT = process.env.PORT || 4000;
app.listen(PORT,() => {
    console.log(`Escuchando en el puerto ${PORT}`);
});

//Importacion ruta
const pokemonApi = require('./routes/pokemon.router');

//Ruta
app.use('/api/pokemones', pokemonApi);

