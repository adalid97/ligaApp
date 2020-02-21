const mongoose = require('mongoose');

const Equipo = mongoose.model('Equipo',
    new mongoose.Schema({nombre: String, pais: String, ano: Number, clasificacion: Number})
);

const Jugador = mongoose.model('Jugador',
    new mongoose.Schema({nombre: String, nacionalidad: String, dorsal: Number, salario: Number})
);

module.exports = {
    Equipo,
    Jugador
}
